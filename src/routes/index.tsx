import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/layout";
import Login from "@/pages/login";
import routes from "./routes.config";
import { apps } from "@/registerMicroApps";
import { AliveScope } from "react-activation";
interface SubAppProps {
  name: string;
}
function RouterConfig() {
  const SubApp = ({ name }: SubAppProps) => {
    return <div id={`container-${name}`} style={{ height: "100%" }}></div>;
  };
  return (
    <AliveScope>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {routes.map((item, index) => {
              return (
                <Route
                  key={index}
                  path={item.path}
                  element={item.element}
                ></Route>
              );
            })}
            {apps.map((app, index) => {
              return (
                <Route
                  key={index}
                  path={app.activeRule}
                  element={<SubApp name={app.name}></SubApp>}
                ></Route>
              );
            })}
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AliveScope>
  );
}
export default RouterConfig;
