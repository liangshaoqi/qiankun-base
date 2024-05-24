import Mock from 'mockjs'

const { mock } = Mock
console.log(11111)
mock('/mockapi/roleList', 'get', () => {
  return {
    code: 200,
    data: {
      list: [
        {
          id: 1,
          name: '超级管理员'
        },
        {
          id: 2,
          name: '管理员'
        },
        {
          id: 3,
          name: '普通用户'
        }
      ]
    }
  }
})