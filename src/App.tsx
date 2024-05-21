import { ConfigProvider } from "antd";
import RouterConfig from "./routes";

import "./App.css";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: "#00b96b" },
        components: {
          Layout: {
            headerBg: "#ffffff",
          },
        },
      }}
    >
      <RouterConfig></RouterConfig>
    </ConfigProvider>
  );
}

export default App;
