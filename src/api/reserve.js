import request from '../utils/request'

export function reserveHistory(data) {
	return request({
		url: '/reserveHistory',
		method: 'POST',
		data: data
	})
}