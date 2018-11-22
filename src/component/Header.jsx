import React, { Component } from 'react';
import './hearTop.css';
class HeaderTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	title: 'header',
    }
  }

  render() {
    return (
      <div className="hearderTop">管理系统<span>登陆</span></div>
    );
  }
}

export default HeaderTop;
