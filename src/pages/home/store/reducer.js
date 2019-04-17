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
	}]
})

export default (state = defaultState, action) => {
	switch(action.type) {
		default:
			return state;
	}	
}