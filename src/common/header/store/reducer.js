import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
// 这里将引入immutable.js，防止新手不小心直接改了state的值（而不是return一个新的state对象）但不知道报错在哪
// 使用immutable.js，我们将创建一个不可被更改的immutable对象

const defaultState = fromJS({
	focused: false,
	list: []
	//此处存在问题，当创建不可更改的对象的时候，对象里面的属性值如果是一个数组（对象），那么这个数组（对象）也是不可更改的
})

export default (state = defaultState, action) => {
	if(action.type === actionTypes.SEARCH_FOCUS) {
		// immutable对象的set方法，会结合之前immutable对象的值
		// 和设置的值，返回一个全新的immutable对象，并不会更改原始的数据
		return state.set("focused", true)
		// 使用immutable.js之后，这里不能再返回一个普通的对象（普通对象没有get方法，在使用中会报错）
	}
	if(action.type === actionTypes.SEARCH_BLUR) {
		return state.set("focused", false)
	}
	if(action.type === actionTypes.CHANGE_LIST) {
		return state.set("list", action.data)
		// 所以这里不能用普通的数组给list赋值，若list是一个不可更改的数组（参考上面第九行注释）
	}
	return state;
}