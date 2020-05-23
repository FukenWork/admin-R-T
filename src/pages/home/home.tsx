import * as  React from 'react'
import StringName from '../../common/string-name/index'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import './home.less'
import {  MenuUnfoldOutlined,  MenuFoldOutlined } from '@ant-design/icons'
import MenuComponent from '../../components/meau/index'


const { Header, Sider, Content } = Layout;
interface IState {
  collapsed: Boolean
}


interface IProps {
  userInfo: any
}


class HomeComponent extends React.Component<IProps, IState>{
  public state = {
    collapsed: false
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }


  render() {
    // 获取是否存用户信息
    const user: any = localStorage.getItem(StringName.USER_INFO)
    let { userInfo } = this.props;
    console.log(userInfo)
    if (!user) {
      return <Redirect to="/login" />
    }
    return (
      <div>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <MenuComponent  />
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              Content
          </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}


const mapToStateProps = (state: any) => ({
  userInfo: state.saveUserInfo
})

export default connect(mapToStateProps)(HomeComponent)
