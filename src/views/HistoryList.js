import React, { Component } from 'react'

export class HistoryList extends Component {
	
	constructor(props) {
		
		super(props)
	}
	
	render() {
		
		const { dataList } = this.props
		
		return dataList.map((item, index) => {
			return(
				<div key={index}>
					<div>{item.title}</div>
				</div>
			)
		})
	}
}