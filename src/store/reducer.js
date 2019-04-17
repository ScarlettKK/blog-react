import { combineReducers } from 'redux-immutable'
// 这里引入redux-immutable，把state也改成一个immutable对象
// 将reducer进行拆分管理，避免整个网页只有一个reducer管理数据和action，造成文件过大以及可读性差，方便后续开发管理
import { reducer as headerReducer } from '../common/header/store'
// 这里直接引用/common/header/store，react会直接去该目录下找index.js来引用，所以对index.js的引用可以省略文件名
import { reducer as homeReducer } from '../pages/home/store'

// 利用combineReducers整合reducers
export default combineReducers({
	header: headerReducer,
	home: homeReducer
})