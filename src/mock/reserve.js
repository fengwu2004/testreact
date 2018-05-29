import Mock from 'mockjs'

let count = 100
let itemList = []

// parkingName, money, numberPlate, valid, reserveTime, reserveCarport, recommondTime
for (let i = 0; i < count; i++) {
  
  let item = Mock.mock({
		'parkingName|1': '重庆时代广场停车场',
		'money|10-20':20,
    'numberPlate|1':['沪A987374', '苏B394857', '粤B447M9'],
    'valid|1':[0, 1],
		'reserveTime|1':['2018-03-04 12:23:03', '2018-01-04 12:23:03', '2018-02-03 12:23:03', '2018-04-02 12:23:03', '2018-05-09 12:23:03'],
		'reserveCarport|1':['A087', 'B384', 'C984', 'F938', 'E887'],
		'recommondTime|1':['2018-03-04 12:23:03', '2018-01-04 12:23:03', '2018-02-03 12:23:03', '2018-04-02 12:23:03', '2018-05-09 12:23:03'],
  })
	
	itemList.push(item)
}

export default {
	reserveHistory: config => {

    const { pageIndex, pageSize } = JSON.parse(config.body)
  
    let mockList = itemList.filter((item, index) => index < pageSize * pageIndex && index >= pageSize * (pageIndex - 1))
    
    return {
      resultCode:0,
      reserveList:mockList,
      pageSize:pageSize,
      pageIndex:pageIndex
    }
  },
}
