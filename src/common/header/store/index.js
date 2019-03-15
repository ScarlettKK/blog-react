import reducer from './reducer'
// 缩短文件引用路径的骚操作
import * as actionCreators from './actionCreators'
// 直接导入一个文件里面所有的export，不需要一个一个单独来
import * as actionTypes from './actionTypes'

export { reducer, actionCreators, actionTypes }
// 这样最终我们只需要在外部文件引入这个 文件夹 的路径，就能一次引入 三个文件 的内容（导入文件夹名会自动匹配index.js），避免冗余