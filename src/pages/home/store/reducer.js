import { fromJS } from 'immutable'

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList:[],
	writerList:[]
})

export default (state = defaultState, action) => {
	switch(action.type) {
		case 'change_home_data':
			return state.merge({// immutable对象的merge方法可以支持一次更改多个属性,而不用一个一个去set
				topicList: fromJS(action.topicList),
				articleList: fromJS(action.articleList),
				recommendList: fromJS(action.recommendList),
				writerList: fromJS(action.writerList)
			})
		default:
			return state;
	}	
}