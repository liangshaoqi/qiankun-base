import { Tabs } from "antd";
import type { TabsProps } from "antd";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apps } from "@/registerMicroApps";
import {loadMicroApp} from 'qiankun';

import "./index.scss";

interface ItemsProps {
  label: string;
}

const TabsComponent: React.FC = (props) => {
  const {} = props;

  const location = useLocation();
  const navigate = useNavigate();

  const [loadedApps, setLoadedApps] = useState<any[]>([])
  const [items, setItems] = useState<TabsProps["items"]>([
    // {
    //   label: 'Tab 1',
    //   key: '1',
    // }
    // {
    //   label: 'Tab 1',
    //   key: '1',
    // },
    // {
    //   label: 'Tab 2',
    //   key: '2',
    // },
    // {
    //   label: 'Tab 3',
    //   key: '3',
    // },
    // {
    //   label: 'Tab 4',
    //   key: '4',
    // },
  ]);

  useEffect(() => {
    console.log("tabs useEffect");
  }, []);

  useEffect(() => {
    const { pathname } = location;
    console.log("监听路由变化: ", location);
    setTabsItems(pathname);
  }, [location, items]);


  // 根据路由变化设置tabs数据
  const setTabsItems = (pathname: string) => {
    console.log("pathname: ", pathname);
    if (!items?.find((tab) => tab.key === pathname)) {
      // todo: 取menu中的label作为数据
      const label = pathname;
      // 如果路由是微前端路由，手动加载微前端
      const activeApp = apps.find((tab) => tab.activeRule === pathname)
      if (activeApp) {
        const loadedApp = loadMicroApp(activeApp);
        const newApp = {
          key: pathname,
          ...loadedApp
        }
        // 缓存已加载子应用
        setLoadedApps([...loadedApps, newApp])
      }
      setItems((prevTabs) => {
        if (prevTabs) {
          return [
            ...prevTabs,
            {
              label,
              key: pathname,
            },
          ];
        } else {
          return [
            {
              label,
              key: pathname,
            },
          ];
        }
      });
    }
  };

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: "add" | "remove"
  ) => {
    console.log(action, targetKey);
    if (action === "remove") {
      // 如果路由是子应用路由，则手动移除子应用
      const activeApp = apps.find((app) => app.activeRule === targetKey)
      if (activeApp) {
        const activeAppItem =  loadedApps.find((item) => item.key === activeApp.activeRule)
        if (activeAppItem) {
          activeAppItem.unmount()
        }
        setLoadedApps(loadedApps.filter(item => item !== activeAppItem))
      }
      // todo: 如果当前路由是关闭的路由则选中最后一个,并跳转到对应的路由中去,这里等待首页确定之后添加
      // 移除
      setItems((prevTabs) => {
        if (prevTabs) {
          return prevTabs.filter((tab) => tab.key !== targetKey);
        } else {
          return [];
        }
      });
    }
  };

  const onChange = (newActiveKey: string) => {
    console.log(newActiveKey)
    navigate(newActiveKey)
  }

  return (
    <Tabs
      className="ch-tabs"
      hideAdd
      type="editable-card"
      items={items}
      onEdit={onEdit}
      onChange={onChange}

    >
      标签页
    </Tabs>
  );
};

export default TabsComponent;
