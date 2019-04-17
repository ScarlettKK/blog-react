import reducer from './reducer'

export { reducer }
// 这样最终我们只需要在外部文件引入这个 文件夹 的路径，就能一次引入 三个文件 的内容（导入文件夹名会自动匹配index.js），避免冗余