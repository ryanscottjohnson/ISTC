import React from 'react';
import './nav.scss';

const Hamburger = props => {
	return (
		<div onClick={props.handleMenu} className="wrapper">
			<div className={props.openMenu ? 'show-nav active' : 'show-nav'}>
				<span />
				<span />
				<span />
			</div>
		</div>
	)
}

export default Hamburger;