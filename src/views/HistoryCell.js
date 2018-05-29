import React, { Component } from 'react'
import style from './HistoryCell.css'

import reserve from '../assets/reserve.png'
import gotoparking from '../assets/gotoparking.png'

export class HistoryCell extends Component{

	render() {
		
		const {parkingName, money, numberPlate, valid, reserveTime, reserveCarport, recommondTime} = this.props.reserveInfo
		
		return (
			<div className={style.card}>
				<div className={style.cellitem}>
					<span className={style.parkingName}>{parkingName}</span><span>{money + '元'}</span>
				</div>
				<div className={style.cellitem}>
					<span className={style.numberPlate}>{numberPlate}</span><span className={style.valid}>{valid?'未过期':'已过期'}</span>
				</div>
				<div className={style.cellitem}>
					<span className={style.reserveTime}>{'预定时间' + reserveTime}</span><span className={style.reserveTime}>{'预定车位:' + reserveCarport}</span>
				</div>
				<div className={style.cellitem}>
					<div className={style.reserveTime} style={{color: '#C8C8C8'}}>{'请在' + new Date(recommondTime).toLocaleDateString() + '前入场' }</div>
				</div>
				<div className={style.line}></div>
				<div className={style.btns}>
					<div className={style.btn}>
						<img className={style.btn_icon} src={reserve} width={15} alt='link'></img>
						<span className={style.btn_text}>预定车位引导</span>
					</div>
					<div className={style.verticalline}></div>
					<div className={style.btn}>
						<img className={style.btn_icon} src={gotoparking} width={15} alt='link'></img>
						<span className={style.btn_text}>前往停车场</span>
					</div>
				</div>
			</div>
		)
	}
}