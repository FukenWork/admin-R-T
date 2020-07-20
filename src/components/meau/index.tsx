import * as React from 'react'
import { Menu } from 'antd'
import { RouterMenu } from '../../common/constants'
import MenuItem from 'antd/lib/menu/MenuItem';

const { SubMenu } = Menu;

export default class MenuComponent extends React.Component {
  router = (RouterMenu: any) => {
    return RouterMenu.map((item: any, index: number) => {
      // 判断是否存在子路由
      if (item.children) {
        return <SubMenu key={item.path} title={
          <span onClick={this.handleRoute}>{item.routerName}</span>
        }>
          {this.router(item.children)}
        </SubMenu>
      } else {
        return <MenuItem key={item.id}>
          {item.routerName}
        </MenuItem>
      }
    })
  }
  handleRoute = (e: any) =>{
    console.log(e)
  }
  render() {
    return (
      <div>
        <Menu theme="dark" mode="inline" defaultOpenKeys={['sub1']}>
          {this.router(RouterMenu)}
        </Menu>
      </div>
    )
  }
}
