import Mock from 'mockjs'
import reserve from './reserve'

Mock.setup({
  timeout: '350-600'
})

Mock.mock(/\/reserveHistory/, 'post', reserve.reserveHistory)

export default Mock
