import React, { Component } from 'react';
import { TopicWrapper, TopicItem } from '../style'

class Topic extends Component {
	render() {
		return (
			<TopicWrapper>
				<TopicItem>
					<img 
						className='topic-pic'
						src='https://pic1.zhimg.com/90/v2-d74ff761bce030533ceccaa8fd8f9e21_250x0.jpg'
					/>
					社会热点
				</TopicItem>
			</TopicWrapper>
		)
	}
}

export default Topic