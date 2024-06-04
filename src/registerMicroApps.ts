import { registerMicroApps, start, initGlobalState } from "qiankun"

export const container = 'container'

interface ISubapps {
  name: string; // 子应用名称,注意: 唯一性
  entry: string; // 子应用入口 eg: '//localhost:3011'
  activeRule: string; // 路由匹配,需要与子应用的basename相同 eg: '/react-app'
  props: any; // 子应用props
}

interface IApps extends ISubapps{
  container: string;
}

const initialState = {
  user: { name: 'John Doe', age: 30 },
  token: 'abcdefg',
};

const actions = initGlobalState(initialState);

// 模拟数据变化
setTimeout(() => {
  actions.setGlobalState({
    user: { name: 'lsq', age: 29 },
    token: 'dflgjh',
  });
}, 5000)

actions.onGlobalStateChange((state, prev) => {
  console.log('主应用监听到全局状态变化:',state, prev);
});

// 添加子应用在这里添加即可
const subapps: ISubapps[] = [
  {
    name: 'react-app',
    activeRule: '/react-app',
    entry: '//localhost:3011',
    props: {
      globalState: actions,
    }
  }
]

// todo: 手动控制子应用销毁?结合缓存?

// 根据名称生成apps
function getApps(): IApps[] {
  const arr: IApps[] = subapps.map((item) => {
    return {
      ...item,
      container: `#${container}-${item.name}`,
    }
  })
  return arr
}

// 抛出子应用配置
export const apps: IApps[] = getApps()

registerMicroApps(apps)

start();