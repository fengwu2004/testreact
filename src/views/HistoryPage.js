import React, { Component } from 'react'
import './HistoryPage.css'
import { reserveHistory } from "../api/reserve";
import { HistoryCell } from "./HistoryCell";

const headerbarstyle = {backgroundColor:'white', display:'flex', width:'100%', alignContent:'space-between', height:'4rem', lineHeight:'4rem', fontSize:'2rem'}

const headerbaritemstyle = {flex:1, textAlign:'center', margin:'0 2rem', boxSizing:'border-box'}

const activestyle = {borderBottom:'2px solid black'}

function baritemstyle(isActive) {
	
	if (isActive) {
		
		return Object.assign({}, headerbaritemstyle, activestyle)
	}
	
	return headerbaritemstyle
}

const HeaderBar = (props) => (
	<div style={headerbarstyle}>
		<div style={baritemstyle(props.showTotal === false)} onClick={() => {props.doClickItem(false)}}>近月内</div>
		<div style={baritemstyle(props.showTotal === true)} onClick={() => {props.doClickItem(true)}}>全部</div>
	</div>
)

export class HistoryPage extends Component {
	
	constructor(props) {
		
		super(props)
		
		this.state = {
			showTotal:false,
			dataList:[{title:'重庆'},{title:'重庆'},{title:'重庆'}]
		}
		
		this.doClickHeaderBar = this.doClickHeaderBar.bind(this)
		
		this.doNaviToCarport = this.doNaviToCarport.bind(this)
		
		this.doNaviToParkingLot = this.doNaviToParkingLot.bind(this)
	}
	
	componentDidMount() {
		
		const data = {
			pageIndex:1,
			pageSize:20,
		}
		
		reserveHistory(data).then(res => {
		
			this.setState({
				dataList:res.data.reserveList
			})
		})
	}
	
	doClickHeaderBar(value) {
		
		this.setState({showTotal:value})
	}
	
	doNaviToCarport(index) {
	
		alert(index)
	}
	
	doNaviToParkingLot() {
	
	
	}

	render() {
		
		const { showTotal, dataList } = this.state
		
		return (
			<div styleName='main'>
				<HeaderBar doClickItem={this.doClickHeaderBar} showTotal={showTotal}></HeaderBar>
				{dataList.map((item, index) => {
					return (<HistoryCell reserveInfo={item} key={index} doNaviToCarport={this.doNaviToCarport} doNaviToParkingLot={this.doNaviToParkingLot}></HistoryCell>)
				})}
			</div>
		)
	}
}