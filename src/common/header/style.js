import styled from 'styled-components' // styled-components 可以让我们设置的样式 只对单个组件起作用，而不会影响其他组件
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
	position: relative;
	height: 58px;
	border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
	href: '/'  // 设置元素的属性
})`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100px;
	height: 58px;
	border-bottom: 1px solid #f0f0f0;
	background: url(${logoPic});
	background-size: contain;
`

export const Nav = styled.div`
	width: 960px;
	height: 100%;
	margin: 0 auto;
	padding-right: 70px;
	box-sizing: border-box;
`

// 下面展示了带class的组件该怎么写，组件的共性又该怎么写
export const NavItem = styled.div`
	line-height: 58px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
`

// box-sizing: border-box;避免元素width被左右padding撑开
// 这里演示了如何对组件下的子元素属性进行更改
export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	width: 160px;
	padding: 0 30px 0 20px;
	height: 38px;
	border: none;
	margin-left: 20px;
	box-sizing: border-box;
	margin-top: 9px;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	color: #666;
	&:: placeholder {
		color: #999;
	}
	&.focused {
		width: 240px;
	}
`
export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 100%;
`

export const Button = styled.div`
	float: right;
	margin-top: 9px;
	margin-right: 20px;
	padding: 0 20px;
	line-height: 38px;
	border-radius: 19px;
	border: 1px solid #ec6149;
	font-size: 14px;
	&.reg {
		color: #ec6149;
	}
	&.writing {
		color: #fff;
		background: #ec6149;
	}
	.iconfont {
		margin-right: 5px;
	}
`

export const SearchWrapper = styled.div`
	float:left;
	position: relative;
	.slide-enter {
		transition: all 0.3s ease-out;
	}
	.slide-enter-active {
		width: 240px;
	}
	.slide-exit {
		transition: all 0.3s ease-out;
	}
	.slide-exit-active {
		width: 160px;
	}
	.iconfont {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
		&.focused {
			background: #777;
			color: #fff;
		}
	}
`
// 这里先把iconfont写成小圆圈是为了后面滑动动画作准备

