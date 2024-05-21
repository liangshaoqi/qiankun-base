import { Layout, Button, Dropdown, Space } from 'antd';
import React, { useState, useEffect } from 'react';
import './index.scss'
import type { MenuProps } from 'antd';

const { Header } = Layout;

interface Props {
  
}

const HeaderComponent: React.FC<Props> = (props) => {

  const {} = props

  const [] = useState()

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a>
          修改密码
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a>
          退出登录
        </a>
      ),
    },
  ]

  useEffect(() => {}, [])

  return (
    <Header className='header-wrap'>
      <div className='header-logo'></div>
      <div className='header-menu'>
        <Dropdown menu={{
          items
        }}>
          <div className='header-menu-item'>
            <span>Yonghuming</span>
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default HeaderComponent;