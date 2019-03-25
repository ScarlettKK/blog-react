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
		const { focused, list } = this.props;
		if(focused){
			return (
				<SearchInfo>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch>换一批</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
					{	
						list.map((item) => {
							return <SearchInfoItem key={item}>{item}</SearchInfoItem>
						})						
					}
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
					<i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe60b;</i>
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
		list: state.getIn(["header", "list"])
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
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)