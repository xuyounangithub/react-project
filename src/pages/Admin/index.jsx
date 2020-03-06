// 管理页面组件
import React from 'react';
//引入路由
import { Redirect } from 'react-router-dom'
//引入memeoryUtils
import memeoryUtils from '../../utils/memeoryUtils.js'
export default class Admin extends React.Component {
  render() {
    const result = memeoryUtils.user;
    if (!result._id) {
      return <Redirect to='/login' />
    }
    return (
      <div>
        {result.username}
      </div>
    )
  }
}