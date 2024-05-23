import React from 'react';
import ReactDOM from 'react-dom/client';
import '@assets/style/reset.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// 手动去除"findDOMNode"相关警告,proComponent库需要官方修复警告错误
const suppressFindDOMNodeWarning = () => {
  const originalConsoleError = console.error;
  console.error = (...args) => {
    if (typeof args[0] === 'string' && args.some(item => item.includes('findDOMNode'))) {
      return
    }
    originalConsoleError.apply(console, args);
  }
}
suppressFindDOMNodeWarning()
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
