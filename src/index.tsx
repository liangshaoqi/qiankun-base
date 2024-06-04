import React from "react";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import "@assets/style/reset.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import "@/registerMicroApps";

const queryClient = new QueryClient();

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );

// 手动去除"findDOMNode"相关警告,proComponent库需要官方修复警告错误
const suppressFindDOMNodeWarning = () => {
  const originalConsoleError = console.error;
  console.error = (...args) => {
    if (
      typeof args[0] === "string" &&
      args.some((item) => item.includes("findDOMNode"))
    ) {
      return;
    }
    originalConsoleError.apply(console, args);
  };
};
suppressFindDOMNodeWarning();

// 这里使用react 17的api是为了兼容react-activation
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById("root")
);

reportWebVitals();
