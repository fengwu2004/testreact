import React, { Component } from 'react'
import './MainPage.css'

import qianwang from '../assets/qianwang.png'
import dizhi from '../assets/dizhi.png'
import dianhua from '../assets/dianhua.png'
import kongchewei from '../assets/kongchewei.png'
import yingyeshijian from '../assets/yingyeshijian.png'
import tingchefei from '../assets/tingchefei.png'
import cheweiyuding from '../assets/cheweiyuding.png'
import yudingjilu from '../assets/yudingjilu.png'
import chepaizhaoche from '../assets/chepaizhaoche.png'

let paddingstle = {
	padding:10,
	paddingTop:0,
	paddingBottom:0,
}

let bottombar = 'bottombar'

export class MainPage extends Component {

	render() {
		return (
			<div styleName='main'>
				<div styleName='header'>
					<div styleName='big-Logo'></div>
					<div styleName='project-Logo'></div>
					<div styleName='title'>重庆时代广场停车场</div>
					<div styleName='tags'>
						<span>实际缴费</span>
						<span>预定车位</span>
						<span>自动缴费</span>
						<span>室内导航</span>
						<span>积分抵扣</span>
					</div>
				</div>
				<div styleName='content'>
					<div styleName='cell'>
						<img styleName='lefticon' src={dizhi} alt='link'/><span styleName='subtitle'>地址</span><span>重庆市万盛区羽毛球公园</span><span style={paddingstle}>导航</span><img styleName='goto' src={qianwang} alt='link'/>
					</div>
					<div styleName='cell'>
						<img styleName='lefticon' src={dianhua} alt='link'/><span styleName='subtitle'>电话</span><span>0794-5793999</span>
					</div>
					<div styleName='cell'>
						<img styleName='lefticon' src={kongchewei} alt='link'/><span styleName='subtitle'>空车位</span><span>140/192个</span>
					</div>
					<div styleName='cell'>
						<img styleName='lefticon' src={yingyeshijian} alt='link'/><span styleName='subtitle'>营业时间</span><span>全天候 (00:00-24:00)</span>
					</div>
					<div styleName='cell'>
						<img styleName='lefticon' src={tingchefei} alt='link'/><span styleName='subtitle'>停车费</span><span>2元/小时</span>
					</div>
				</div>
				<div styleName={bottombar}>
					<div styleName='btn'>
						<img src={cheweiyuding} alt='link'/><span>车位预定</span>
					</div>
					<div styleName='btn'>
						<img src={yudingjilu} alt='link'/><span>预定记录</span>
					</div>
					<div styleName='btn'>
						<img src={chepaizhaoche} alt=''/><span>车牌找车</span>
					</div>
				</div>
			</div>
		)
	}
}
