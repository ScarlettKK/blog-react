import React, { Component } from 'react'
import { connect } from 'react-redux'
import { WriterWrapper, WriterHeader, WriterList, WriterIntro, Follow } from '../style'
import { SearchInfoSwitch } from '../../../common/header/style'
import writerHeader from '../../../statics/writerHeader.jpeg'

class Writer extends Component {
	render() {
		const { handleChangePage } = this.props;
		return (
			<WriterWrapper>
				<WriterHeader>
					推荐作者
					<SearchInfoSwitch onClick={() => handleChangePage(this.spinIcon)}>
						{
							/*
							React提供的这个ref属性，表示为对组件真正实例的引用，其实就是ReactDOM.render()返回的组件实例；
							ReactDOM.render()渲染组件时返回的是组件实例；
							渲染dom元素时，返回是具体的dom节点。
							
							也就是说,this.spinIcon拿到的是i这个dom节点,
							这样我们就可以对这个dom节点的属性进行操作
							*/
						}
						<i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
						换一批
					</SearchInfoSwitch>
				</WriterHeader>
				<WriterList>
					<img src={writerHeader} alt='用户头像'/>
					<WriterIntro>
						<span className='writerName'>简书钻首席小管家</span>
						<span className='writerAchievement'>写了184.7k字 · 141.7k喜欢</span>
					</WriterIntro>
					<Follow />
				</WriterList>
			</WriterWrapper>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleChangePage(spin){
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if(originAngle) {
				originAngle = parseInt(originAngle, 10)
			} else {
				originAngle = 0
			}
			spin.style.transform = 'rotate('+(originAngle + 360)+'deg)'
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Writer)