import { RouteObject } from "react-router-dom";
import Role from "@pages/sysSet/role";
import User from "@pages/sysSet/user";
import KeepAlive from "react-activation";

// 纯路由管理
const routes: RouteObject[] = [
  {
    path: "/role",
    element: (
      <KeepAlive cacheKey="role">
        <Role></Role>
      </KeepAlive>
    ),
  },
  {
    path: "/sys",
    element: (
      <KeepAlive cacheKey="sys">
        <div><input type="text" /></div>
      </KeepAlive>
    ),
  },
  {
    path: "/user",
    element: (
      <KeepAlive cacheKey="user">
        <User></User>
      </KeepAlive>
    ),
  },
];

export default routes;
