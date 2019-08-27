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