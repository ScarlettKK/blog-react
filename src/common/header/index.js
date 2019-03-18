// 通用组件放于common文件夹中
import React from 'react';
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
	SearchWrapper
} from './style'

// 改为无状态组件
const Header = (props) => {
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
					in={props.focused}
					timeout={300}
					classNames="slide"
				>
					<NavSearch
					 className={props.focused ? 'focused' : ''}
					 onFocus={props.handleInputFocus}
					 onBlur={props.handleInputBlur}
					></NavSearch>
				</CSSTransition>
				<i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe60b;</i>
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

const mapStateToProps = (state) => {
	return {
		focused:state.header.get("focused")
		// Reducer整合后，数据包装会多一层
		// 当使用immutable.js封装state之后，state的属性不能通过"."直接获取，而是要用get方法获取
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(){
			dispatch(actionCreators.searchFocus())
		},
		handleInputBlur(){
			dispatch(actionCreators.searchBlur())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)