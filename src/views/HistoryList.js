import React, { Component } from 'react'
import { HistoryCell } from "./HistoryCell";

export class HistoryList extends Component {
	
	render() {
		
		const { dataList } = this.props
		
		return dataList.map((item, index) => {
			return(
				<div key={index}>
					<HistoryCell reserveInfo={item}></HistoryCell>
				</div>
			)
		})
	}
}