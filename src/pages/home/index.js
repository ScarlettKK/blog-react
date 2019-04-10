import React, { Component } from 'react';
import { 
	HomeWrapper,
	HomeLeft,
	HomeRight
	} from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

class Home extends Component {
	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4633/8db4df2059d947bf82382988d7cd228a0ec47e77.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
			</HomeWrapper>
		)
	}
}

export default Home