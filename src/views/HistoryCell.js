import React, { Component } from 'react'

export class HistoryCell extends Component{

	render() {
		
		const {parkingName, money, numberPlate, valid, reserveTime, reserveCarport, recommondTime} = this.props.reserveInfo
		
		return (
			<div>
				<div>
					<span>{parkingName}</span><span>{money}</span>
				</div>
				<div>
					<span>{numberPlate}</span><span>{valid?'未过期':'已过期'}</span>
				</div>
				<div>
					<span>{reserveTime}</span><span>{reserveCarport}</span>
				</div>
				<div>{'请在' + new Date(recommondTime).toLocaleDateString() + '前入场' }</div>
			</div>
		)
	}
}