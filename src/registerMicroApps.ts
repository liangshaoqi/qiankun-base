import { registerMicroApps, start } from "qiankun"

export const container = 'container'

interface ISubapps {
  name: string; // 子应用名称,注意: 唯一性
  entry: string; // 子应用入口 eg: '//localhost:3011'
  activeRule: string; // 路由匹配,需要与子应用的basename相同 eg: '/react-app'
}

interface IApps extends ISubapps{
  container: string;
}

// 添加子应用在这里添加即可
const subapps: ISubapps[] = [
  {
    name: 'react-app',
    activeRule: '/react-app',
    entry: '//localhost:3011',
  }
]


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