import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'; // 要注意这里的css引入会跟其他文件（组件）里面的样式互相冲突，所以这里不建议直接引入css样式
import App from './App';
// import * as serviceWorker from './serviceWorker';
import './style.js';
import './statics/iconFont/iconfont'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
