// 登录页面组件
import React from 'react';
//引入login的less文件
import './index.less';
//引入路由
import { Redirect } from 'react-router-dom'
//引入图片
import Image from "./images/logo.png";
//引入组件
import { Form, Input, Button, Icon, message } from 'antd';
//引入图标
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
//引入api
import { reqLogin } from '../../api'
//引入memeoryUtils
import memeoryUtils from '../../utils/memeoryUtils.js'
//引入storageUtils
import storageUtils from '../../utils/storageUtils.js'
class Login extends React.Component {
  //提交表单事件
  handleSubmit = (e) => {
    //阻止事件默认行为
    e.preventDefault();
    //对所有表单进行校验
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { username, password } = values
        const { data: res } = await reqLogin(username, password);
        console.log(res)
        if (res.status == 0) {
          //将输入的用户名存起来
          memeoryUtils.user = res.data;
          storageUtils.savaUser(res.data);
          message.success('登录成功');
          //跳转到管理界面
          this.props.history.replace('/');
        } else {
          message.error('用户名或者密码错误')
        }
      } else {
        console.log('校验失败')
      }
    });
  }
  //用户自定义验证
  validateUse = (rule, value, callback) => {
    // console.log(rule, value)
    if (!value) {
      callback('用户名不能为空')
    } else if (value.length <= 4) {
      callback('用户名至少 4 位')
    } else if (value.length >= 12) {
      callback('用户名最多 12 位')
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      callback('用户名必须是英文、数字或下划 线组成')
    } else {
      callback()
    }
  }
  //密码自定义验证
  validatePwd = (rule, value, callback) => {
    if (!value) {
      callback('密码不能为空')
    } else if (value.length < 4) {
      callback('密码长度不能小于 4 位')
    } else if (value.length > 12) {
      callback('密码长度不能大于 12 位')
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      callback('密码必须是英文、数字或下划线组成')
    } else {
      callback()
    }
  }
  render() {
    const user = memeoryUtils.user;
    if (user && user._id) {
      return <Redirect to='/' />
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login'>
        <header className='login-header'>
          <img src={Image}></img>
          <h1>React项目:我的后台管理项目</h1>
        </header>
        <section className='login-content'>
          <h2>用户登录</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                //声明式验证；
                // rules: [
                //   { required: true, whitespace: true, message: '用户名必须输入' },
                //   { min: 4, message: '用户名至少 4 位' },
                //   { max: 12, message: '用户名最多 12 位' },
                //   { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划 线组成' },
                // ],
                //自定义验证
                rules: [
                  { validator: this.validateUse }
                ]
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ validator: this.validatePwd }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}
const WrappedNormalLoginForm = Form.create()(Login);
export default WrappedNormalLoginForm;

//前台表单验证
//获取表单的数据

//高阶函数 1.一类特别的函数  a.接受函数类的参数 b.返回值是函数 
       // 2.常见  a.定时器 b.promise c.数组遍历 d.函数的对象；

//高阶组件 1.本身就是一个函数 2.接受一个组件（被包装的组件）返回一个新的组件（包装组件） 包装组件会向被包装的组件传入特定的属性
      //3.扩展组件的功能 4.高阶组件也是高阶函数：接收一个组件函数，返回是一个新的组件函数；、

//配置对象

//async 和 await

//作用  简化Promise 对象的使用；不再使用then（）来指定成功或者失败；

//以同步的编码方式实现异步操作；

