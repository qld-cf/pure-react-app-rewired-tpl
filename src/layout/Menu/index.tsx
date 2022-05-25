/**
 * 菜单栏
 */
import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import configMenu from '@config/menu';
const { SubMenu } = Menu

interface Iprop {
  updateMenuTab?: any;
  tabList?: any;
}

const MyMenu = (props: Iprop & any) => {
  const collapsed = false

  const renderMenu = (list: any[]) => {
    return list.map(item => {
      if (item.children && item.children.length > 0) {
        return (
          <SubMenu title={item.name} key={item.id}>
            {renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item title={item.title} key={item.id} >
          <Link to={item.route}>{item.name}</Link>
        </Menu.Item>
      )
    })
  }

  return (
    <div style={{ minWidth: 200, background: '#001529' }}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        theme='dark'
        inlineCollapsed={collapsed}
      >
        {renderMenu(configMenu)}
      </Menu>
    </div>
  )
}

export default MyMenu


