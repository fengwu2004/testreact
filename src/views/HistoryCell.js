import React, { Component } from 'react'
import './HistoryCell.css'

import reserve from '../assets/reserve.png'
import gotoparking from '../assets/gotoparking.png'

export class HistoryCell extends Component{

	render() {
		
		const {parkingName, money, numberPlate, valid, reserveTime, reserveCarport, recommondTime} = this.props.reserveInfo
		
		return (
			<div className='card'>
				<div className='cellitem'>
					<span className='parkingName'>{parkingName}</span><span>{money + '元'}</span>
				</div>
				<div className='cellitem'>
					<span className='numberPlate'>{numberPlate}</span><span className='valid'>{valid?'未过期':'已过期'}</span>
				</div>
				<div className='cellitem'>
					<span className='reserveTime'>{'预定时间' + reserveTime}</span><span className='reserveTime'>{'预定车位:' + reserveCarport}</span>
				</div>
				<div className='cellitem'>
					<div className='reserveTime' style={{color: '#C8C8C8'}}>{'请在' + new Date(recommondTime).toLocaleDateString() + '前入场' }</div>
				</div>
				<div className='line'></div>
				<div className='btns'>
					<div className='btn'>
						<img className='btn-icon' src={reserve} width={15} alt='link'></img>
						<span className='btn-text'>预定车位引导</span>
					</div>
					<div className='verticalline'></div>
					<div className='btn'>
						<img className='btn-icon' src={gotoparking} width={15} alt='link'></img>
						<span className='btn-text'>前往停车场</span>
					</div>
				</div>
			</div>
		)
	}
}