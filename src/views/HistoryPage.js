import React, { Component } from 'react'
import './HistoryPage.css'
import { HistoryList } from "./HistoryList";

const headerbarstyle = {display:'flex', width:'100%', alignContent:'space-between', height:'4rem', lineHeight:'4rem', fontSize:'2rem'}

const headerbaritemstyle = {flex:1, textAlign:'center', margin:'0 1rem', boxSizing:'border-box'}

const activestyle = {borderBottom:'3px solid black'}

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
	}
	
	doClickHeaderBar(value) {
		
		this.setState({showTotal:value})
	}

	render() {
		
		const { showTotal, dataList } = this.state
		
		return (
			<div className='main'>
				<HeaderBar doClickItem={this.doClickHeaderBar} showTotal={showTotal}></HeaderBar>
				<HistoryList dataList={dataList}></HistoryList>
			</div>
		)
	}
}