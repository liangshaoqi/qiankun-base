import React from 'react';

// 声明 require.context 的类型
declare const require: {
  context: (path: string, deep?: boolean, filter?: RegExp) => {
    keys: () => string[];
    <T>(id: string): T;
  };
};

// 使用 require.context 动态导入 components 文件夹中的所有 .tsx 文件
const req: any = require.context('.', true, /\.tsx$/);
const components: Record<any, React.FC> = {};
// 动态生成组件的映射
req.keys().forEach((filename: string) => {
  // 去除本身
  if (filename === './index.tsx') {
    return;
  }
  const componentName = filename.replace(/^\.\//, '').replace('/index.tsx', '');;
  components[componentName] = req(filename).default;
});
export default components;
