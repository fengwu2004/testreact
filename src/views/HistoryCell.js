import React, { Component } from 'react'
import './HistoryCell.scss'

import reserve from '../assets/reserve.png'
import gotoparking from '../assets/gotoparking.png'

export class HistoryCell extends Component{
	
	constructor(props) {
		
		super(props)
		
		this.doNaviToCarport = this.doNaviToCarport .bind(this)
		
		this.doNaviToParkingLot = this.doNaviToParkingLot.bind(this)
		
		this.getReserveTime = this.getReserveTime.bind(this)
	}
	
	doNaviToCarport () {
	
		const { reserveInfo } = this.props
		
		const {reserveCarport} = reserveInfo
		
		if (this.props.doNaviToCarport) {
			
			this.props.doNaviToCarport (reserveCarport)
		}
	}
	
	doNaviToParkingLot() {
	
		if (this.props.doNaviToParkingLot) {
			
			this.props.doNaviToParkingLot()
		}
	}
	
	getReserveTime(time) {
	
		return time
	}

	render() {
	
		const { reserveInfo } = this.props
		
		const {parkingName, money, numberPlate, valid, reserveTime, reserveCarport, recommondTime} = reserveInfo
		
		return (
			<div styleName='card'>
				<div styleName="content">
					<div>
						<span styleName='parkingName'>{parkingName}</span><span>{money + '元'}</span>
					</div>
					<div>
						<span styleName='numberPlate'>{numberPlate}</span><span styleName='valid'>{valid?'未过期':'已过期'}</span>
					</div>
					<div>
						<span styleName='reserveTime'>{'预定时间' + this.getReserveTime(reserveTime)}</span><span styleName='reserveTime'>{'预定车位:' + reserveCarport}</span>
					</div>
					<div>
						<div styleName='reserveTime' style={{color: '#C8C8C8'}}>{'请在' + new Date(recommondTime).toLocaleDateString() + '前入场' }</div>
					</div>
				</div>
				<div styleName='btns'>
					<div styleName='btn' onClick={this.doNaviToCarport}>
						<img src={reserve} width={15} alt='link'></img>
						<span>预定车位引导</span>
					</div>
					<div styleName='verticalline'></div>
					<div styleName='btn' onClick={this.doNaviToParkingLot}>
						<img src={gotoparking} width={15} alt='link'></img>
						<span>前往停车场</span>
					</div>
				</div>
			</div>
		)
	}
}