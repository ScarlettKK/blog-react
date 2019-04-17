import React, { Component } from 'react';
import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux'

class Topic extends Component {
	render() {
		return (
			<TopicWrapper>
				{
					this.props.list.map((item)=>{
						return (
							<TopicItem key={item.get('id')}>
								<img 
									className='topic-pic'
									src={item.get('imgurl')}
								/>
								{item.get('title')}
							</TopicItem>
						)
					})
				}
			</TopicWrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	list: state.get('home').get('topicList')
})

export default connect(mapStateToProps, null)(Topic)
// 这里的组件不会改store里面的数据，所以第二个参数传递null