import React, { Component } from 'react'
import './HistoryCell.scss'

import reserve from '../assets/reserve.png'
import gotoparking from '../assets/gotoparking.png'

export class HistoryCell extends Component{

	render() {
		
		const {parkingName, money, numberPlate, valid, reserveTime, reserveCarport, recommondTime} = this.props.reserveInfo
		
		return (
			<div styleName='card'>
				<div styleName='cellitem'>
					<span styleName='parkingName'>{parkingName}</span><span>{money + '元'}</span>
				</div>
				<div styleName='cellitem'>
					<span styleName='numberPlate'>{numberPlate}</span><span styleName='valid'>{valid?'未过期':'已过期'}</span>
				</div>
				<div styleName='cellitem'>
					<span styleName='reserveTime'>{'预定时间' + reserveTime}</span><span styleName='reserveTime'>{'预定车位:' + reserveCarport}</span>
				</div>
				<div styleName='cellitem'>
					<div styleName='reserveTime' style={{color: '#C8C8C8'}}>{'请在' + new Date(recommondTime).toLocaleDateString() + '前入场' }</div>
				</div>
				<div styleName='line'></div>
				<div styleName='btns'>
					<div styleName='btn'>
						<img styleName='btn_icon' src={reserve} width={15} alt='link'></img>
						<span styleName='btn_text'>预定车位引导</span>
					</div>
					<div styleName='verticalline'></div>
					<div styleName='btn'>
						<img styleName='btn_icon' src={gotoparking} width={15} alt='link'></img>
						<span styleName='btn_text'>前往停车场</span>
					</div>
				</div>
			</div>
		)
	}
}