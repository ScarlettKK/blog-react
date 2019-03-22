import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

export const searchFocus = () => ({
	type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
	type: actionTypes.SEARCH_BLUR
})

const changeList = (data) => ({
	type: actionTypes.CHANGE_LIST,
	data: fromJS(data)
	// 将data变成一个不可更改的数组（方便后面赋值）
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