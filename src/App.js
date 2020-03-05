//应用的根组件；
import React from 'react';
import './App.css';
import { Button, message } from 'antd';

class App extends React.Component {
  handleClick = () => {
    message.success('This is a success message');
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>Button</Button>
      </div>
    )
  }
}

export default App;
