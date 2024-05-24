const Mock = require('mockjs')
const express = require('express');
const app = express();
const port = 8088;

// 统一中间键设置允许跨域
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  // 对于预检请求，直接返回 200
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.get('/mockapi/roleList', (req, res) => {
  res.json(Mock.mock({
    code: 200,
    data: {
      'list|20': [{
        'id|+1': 1,
        'name': '@cname'
      }]
    }
  }))
})

app.listen(port, () => {
  console.log(`mock server listening at http://localhost:${port}`)
})