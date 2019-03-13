import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css'; 
import { Provider } from 'react-redux'
import Header from './common/header/index'
import store from './store/index'

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
    		<Header />
    	</Provider>
    )
  }
}

export default App;
