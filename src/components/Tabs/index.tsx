import { Tabs } from 'antd';
import React, { useState, useEffect } from 'react';

interface Props {
  
}

const TabsComponent: React.FC<Props> = (props) => {

  const {} = props

  const [items, setItems] = useState([
    {
      label: 'Tab 1',
      key: '1',
    },
    {
      label: 'Tab 2',
      key: '2',
    },
    {
      label: 'Tab 3',
      key: '3',
    },
    {
      label: 'Tab 4',
      key: '4',
    },
  ])

  useEffect(() => {}, [])

  return (
    <Tabs
      hideAdd
      type="editable-card"
      items={items}
    >
      标签页
    </Tabs>
  );
};

export default TabsComponent;