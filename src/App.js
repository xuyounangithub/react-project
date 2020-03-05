//应用的根组件；
import React from 'react';
import './App.css';
//引入ui组件
// import { Button, message } from 'antd';
//引入路由组件
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//引入登录组件和管理组件
import Login from "./pages/Login";
import Admin from "./pages/Admin";


export default class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <Router>
          {/* 只匹配一个 */}
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/' component={Admin}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

