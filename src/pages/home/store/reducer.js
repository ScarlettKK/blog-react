import { fromJS } from 'immutable'

const defaultState = fromJS({
	topicList: [{
		id: 1,
		title: '社会热点',
		imgurl: 'https://pic1.zhimg.com/90/v2-d74ff761bce030533ceccaa8fd8f9e21_250x0.jpg'
	},{
		id: 2,
		title: '手绘',
		imgurl: 'https://pic1.zhimg.com/90/v2-d74ff761bce030533ceccaa8fd8f9e21_250x0.jpg'
	}],
	articleList: [{
		id: 1,
		title: '这4个知乎高赞的手机APP，你装了几个？全都没装的话就很遗憾了！',
		desc: '如今人手一部手机，刷手机也成为很多人生活的常态了，甚至不少人犯了一种瘾，手机瘾，不刷手机，手上、心理就不舒服。一般刷手机时，你会刷什么APP呢？...',
		imgurl: '//upload.jianshu.io/admin_banners/web_images/4633/8db4df2059d947bf82382988d7cd228a0ec47e77.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
	},{
		id: 2,
		title: '这4个知乎高赞的手机APP，你装了几个？全都没装的话就很遗憾了！',
		desc: '如今人手一部手机，刷手机也成为很多人生活的常态了，甚至不少人犯了一种瘾，手机瘾，不刷手机，手上、心理就不舒服。一般刷手机时，你会刷什么APP呢？...',
		imgurl: '//upload.jianshu.io/admin_banners/web_images/4633/8db4df2059d947bf82382988d7cd228a0ec47e77.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
	}]
})

export default (state = defaultState, action) => {
	switch(action.type) {
		default:
			return state;
	}	
}