import { RouteObject } from "react-router-dom"
import Role from '@pages/sysSet/role'
import User from '@pages/sysSet/user'

// 纯路由管理
const routes: RouteObject[] = [
  {
    path: '/role',
    element: <Role></Role>
  },
  {
    path: '/user',
    element: <User></User>
  }
]

export default routes