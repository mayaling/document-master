import React, { Component } from 'react';
import './home.css';
class HeaderTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	title: '首页',
    }
  }

  render() {
    return (
      <div className="hearderTop">管理系统</div>
    );
  }
}

export default HeaderTop;
