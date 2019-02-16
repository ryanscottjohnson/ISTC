import React from 'react';
import './nav.scss';

class Hamburger extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div onClick={this.props.handleMenuOpenClose} className="wrapper">
				<div className={this.props.openMenu ? 'show-nav active' : 'show-nav'}>
					<div className="menu">
						<span className="menu-global menu-top"></span>
						<span className="menu-global menu-middle"></span>
						<span className="menu-global menu-bottom"></span>
					</div>
					{/* <span />
					<span />
					<span /> */}
				</div>
			</div>
		)
	}
}

export default Hamburger;