import React, {Component} from 'react';

import './index.css';

import bakary from './images/bakary.png';
import logo from './images/logo.png';
import sony from './images/sony.jpg';

export default class Page1 extends Component {
	render() {
		return (
			<div className="page-box">
				this is Page1~
				<img src={bakary}/>
				<img src={sony}/>
				<img src={logo}/>
			</div>
		)
	}
}