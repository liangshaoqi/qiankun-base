import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Header from "@components/Header";
import components from "@/components";
import { Outlet, Link } from "react-router-dom";

import { container } from "../registerMicroApps";
import KeepAliveOutlet from "./components/KeepAliveOutlet";
const { Content, Sider } = Layout;
const { Tabs } = components;
type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
  {
    key: '/role',
    label: <Link to='/role'>角色</Link>,
  },
  {
    key: '/sys',
    label: <Link to='/sys'>系统</Link>,
  },
  {
    key: '/react-app',
    label: <Link to='/react-app'>react</Link>,
  },
]

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100%" }} id={container}>
      <Header />
      <Layout>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0, overflow: "auto" }}
            items={items}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb
            style={{ margin: "8px 0" }}
            items={[
              { title: "sample" },
              { title: "sample" },
              { title: "sample" },
            ]}
          ></Breadcrumb>
          <Tabs></Tabs>
          <Content
            style={{
              padding: 24,
              margin: 0,
              overflow: "auto",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* <Outlet /> */}
            <KeepAliveOutlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
