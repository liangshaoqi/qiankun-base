import { RouteObject } from "react-router-dom";
import Role from "@pages/sysSet/role";
import User from "@pages/sysSet/user";
import KeepAlive from "react-activation";
import { Input } from "antd";

// 纯路由管理
const routes: RouteObject[] = [
  {
    path: "/role",
    element: (
      <KeepAlive cacheKey="/role" name='/role'>
        <Role></Role>
      </KeepAlive>
    ),
  },
  {
    path: "/sys",
    element: (
      <KeepAlive cacheKey="/sys" name='/sys'>
        <div>
          <Input type="text" />
        </div>
      </KeepAlive>
    ),
  },
  {
    path: "/test",
    element: (
      <KeepAlive cacheKey="/test" name='/test'>
        <div>
          <Input type="text" />
          text
        </div>
      </KeepAlive>
    ),
  },
  {
    path: "/user",
    element: (
      <KeepAlive cacheKey="/user" name='/user'>
        <User></User>
      </KeepAlive>
    ),
  },
];

export default routes;
