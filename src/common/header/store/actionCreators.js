import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

/*
 * 代码优化：私有的，不导出的方法，要么都放在顶部，要么都放在底部
*/
const changeList = (data) => ({
	type: actionTypes.CHANGE_LIST,
	data: fromJS(data),
	// 将data变成一个不可更改的数组（方便后面赋值）
	totalPage: Math.ceil(data.length /10)
})

export const searchFocus = () => ({
	type: actionTypes.SEARCH_FOCUS
})

export const mouseEnter = () => ({
	type: actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
	type: actionTypes.MOUSE_LEAVE
})

export const searchBlur = () => ({
	type: actionTypes.SEARCH_BLUR
})

export const changePage = (page) => ({
	type: actionTypes.CHANGE_PAGE,
	page
})

export const getList = () => {
	return (dispatch) => {
		axios.get("/api/list.json").then((res) => {
			const data = res.data;
			const action  = changeList(data.data);
			dispatch(action)
		}).catch((res) => {
			console.log(res)
		})
	}
}