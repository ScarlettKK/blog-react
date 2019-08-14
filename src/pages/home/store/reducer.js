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
	}],
	recommendList:[{
		id: 1,
		imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
	},{
		id: 2,
		imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
	},{
		id: 3,
		imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
	},{
		id: 4,
		imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
	}]
})

export default (state = defaultState, action) => {
	switch(action.type) {
		default:
			return state;
	}	
}