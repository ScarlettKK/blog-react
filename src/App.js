import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css'; 
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header/index'
import Home from './pages/home'
import Detail from './pages/detail'
import store from './store/index'

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
    		<Header />
    		<BrowserRouter>
    			{/*这里需要加上exact字段，来精确匹配路径值，否则'/detail'的时候也会匹配上'/'*/}
                {/*component属性使得我们可以直接引入外部组件*/}
    			<Route path='/' exact component={Home}></Route>
    			<Route path='/detail' exact component={Detail}></Route>
    		</BrowserRouter>
    	</Provider>
    )
  }
}

export default App;
