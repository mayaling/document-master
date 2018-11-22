import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import HeaderTop from '../component/Header.jsx';
import Routes from '@src/routes.jsx';
import './index.css';
const { Header, Content, Footer, Sider } = Layout;

const SubMenu = Menu.SubMenu;

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	collapsed: false,
    }
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  render() {
    return (
    	<div>
    		<HeaderTop />
	      <Layout style={{ minHeight: '100vh' }}>
	        <Sider
	          collapsible
	          collapsed={this.state.collapsed}
	          onCollapse={this.onCollapse}
	        >
	          <div className="logo" />
	          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
	           {/* <Menu.Item key="1">
	              <Icon type="pie-chart" />
	              <span>首页</span>
	            </Menu.Item>
	            <Menu.Item key="2">
	              <Icon type="desktop" />
	              <span>Option 2</span>
	            </Menu.Item>*/}
	            <SubMenu
	              key="sub1"
	              title={<span><Icon type="user" /><span>首页</span></span>}
	            >
	            </SubMenu>
	            <SubMenu
	              key="sub2"
	              title={<span><Icon type="team" /><span>Team</span></span>}
	            >
	              <Menu.Item key="1">Team 1</Menu.Item>
	              <Menu.Item key="2">Team 2</Menu.Item>
	            </SubMenu>
				<SubMenu key="sub1" title={<span><Icon type="mail" /><span>项目管理</span></span>}>
                    <Menu.Item key="1"><Link to="/myTable">项目号建立</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/myForm">项目跟催记录</Link></Menu.Item>
                </SubMenu>	           
	        </Sider>
	        <Layout>
	        	<Routes />
	        </Layout>
	      </Layout>
      	</div>
    );
  }
}

export default Container;
