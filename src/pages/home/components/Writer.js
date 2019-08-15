import React, { Component } from 'react'
import { WriterWrapper, WriterHeader, WriterList, WriterIntro, Follow } from '../style'
import { SearchInfoSwitch } from '../../../common/header/style'

class Writer extends Component {
	render() {
		return (
			<WriterWrapper>
				<WriterHeader>
					推荐作者
					<SearchInfoSwitch>
						<i>&#xe851;</i>
						换一批
					</SearchInfoSwitch>
				</WriterHeader>
				<WriterList>
					<img />
					<WriterIntro />
					<Follow />
				</WriterList>
			</WriterWrapper>
		)
	}
}

export default Writer