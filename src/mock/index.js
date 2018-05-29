import Mock from 'mockjs'
import messageAPI from './message'

Mock.setup({
  timeout: '350-600'
})

Mock.mock(/\/jsestate-service\/msg\/msg_list/, 'post', messageAPI.queryMsgList)
Mock.mock(/\/jsestate-service\/msg\/msg_detail/, 'post', messageAPI.queryMsgDetail)

export default Mock
