// 通用组件放于common文件夹中
import React,{Component} from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
// 内容回顾：react css动画效果
import { actionCreators } from './store'
// 直接导入一个文件里面所有的export，不需要一个一个单独来
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	SearchWrapper
} from './style'

// 由于Header要被继续扩展，会变得很庞大，继续用无状态组件需要传递更多的参数，并且函数嵌套函数，维护起来会有问题，所以这里改回正常的组件
class Header extends Component {
	getListArea(){//根据第24行，这里就不用传参数了
		/*
		 * 代码优化：将this.props的值存储在临时变量中
		 * 避免变量名过长（每次都是this.props.xxx）
		*/
		const { focused, list, page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		const newList = list.toJS(); // 将list一个immutable的数组改成一个普通的数组
		const pageList = [];

		if(newList.length) {//要注意这段代码一开始没有数据的时候也会被加载，所以这里要加上判断，不然下面的key值都是undefined，也会报错
			for(let i = page * 10 ; i < (page + 1) * 10; i++) {
				if(newList[i])
					pageList.push(
						<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
					)
			}
		}
		if(focused || mouseIn){
			return (
				<SearchInfo 
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
						{/* 下面这里是实现CSS动画的另一种方案，仅借助CSS自带的transition实现；另外这里也用到了ref */}
						<i ref={(icon) => {this.spinIcon = icon}}className="iconfont spin">&#xe851;</i>
						换一换
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
					{pageList}
					</SearchInfoList>
				</SearchInfo>
			)
		} else {
			return null;
		}
	}
	render() {
		/*
		 * 代码优化：将this.props的值存储在临时变量中
		 * 避免变量名过长（每次都是this.props.xxx）
		*/
		const { focused, handleInputFocus, handleInputBlur } = this.props;
		return (<HeaderWrapper>
			<Logo />
			<Nav>
				<NavItem className='left active'>首页</NavItem>
				<NavItem className='left'>下载APP</NavItem>
				<NavItem className='right'>登录</NavItem>
				<NavItem className='right'>
					<i className="iconfont">&#xe636;</i>
				</NavItem>
				<SearchWrapper>
					<CSSTransition
						in={focused}
						timeout={300}
						classNames="slide"
					>
						<NavSearch
						 className={focused ? 'focused' : ''}
						 onFocus={handleInputFocus}
						 onBlur={handleInputBlur}
						></NavSearch>
					</CSSTransition>
					<i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60b;</i>
					{this.getListArea()}
					{/*这里是根据if返回JSX的一种新写法*/}
				</SearchWrapper>
			</Nav>
			<Addition>
			    <Button className="writing">
				    <i className="iconfont">&#xe624;</i>
				    写文章
			    </Button>
				<Button className="reg">注册</Button>
			</Addition>
		</HeaderWrapper>)
	}
}

const mapStateToProps = (state) => {
	return {
		// Reducer整合后，数据包装会多一层
		// 当使用immutable.js封装state之后，state的属性不能通过"."直接获取，而是要用get方法获取
		// focused:state.header.get("focused")
		// 这里虽然我们使用了immutable.js，但是这个写法一半普通对象一半immutable对象的，并不规范且有些奇怪，所以我们需要把state也改成一个immutable对象（详情看最大的reducer）
		
		// 把state也改成一个immutable对象
		// focused:state.get("header").get("focused")
		// 另一种写法：连续使用get获取的时候，可以使用getIn函数，传入一个数组，意义与上面写法同
		focused:state.getIn(["header", "focused"]),
		// 最后附上 immutable-js 官方文档 https://immutable-js.github.io/immutable-js/docs/#/
		list: state.getIn(["header", "list"]),
		page: state.getIn(["header", "page"]),
		mouseIn: state.getIn(["header", "mouseIn"]),
		totalPage : state.getIn(["header", "totalPage"])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(){
			dispatch(actionCreators.getList())
			dispatch(actionCreators.searchFocus())
		},
		handleInputBlur(){
			dispatch(actionCreators.searchBlur())
		},
		handleMouseEnter(){
			dispatch(actionCreators.mouseEnter())
		},
		handleMouseLeave(){
			dispatch(actionCreators.mouseLeave())
		},
		handleChangePage(page, totalPage, spin){
			// 实现CSS动画的另一种方案
			// 下面这里的意思是，spin.style.transform的值中非数字的部分，都替换成空字符串
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			// 将字符串转成数字，并且处理空字符串
			if(originAngle) {
				originAngle = parseInt(originAngle, 10)
			} else {
				originAngle = 0
			}
			// 不断的旋转效果（改变rotate的角度）
			spin.style.transform = 'rotate('+(originAngle + 360)+'deg)'

			// 页面换一换切换效果
			if(page < totalPage - 1)
				page ++;
			else
				page = 0;
			dispatch(actionCreators.changePage(page))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)