import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/layout";
import Login from "@/pages/login";
import routes from "./routes.config";
function RouterConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
          {routes.map((item, index) => {
            return (
              <Route key={index} path={item.path} element={item.element}></Route>
            );
          })}
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RouterConfig
