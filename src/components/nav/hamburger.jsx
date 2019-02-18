import React from 'react';
import './nav.scss';

class Hamburger extends React.Component {
  constructor(props){
		super(props);
	}
	
render () {
	return (
		<div onClick={this.props.handleMenuOpenClose} className="wrapper">
			<div className={this.props.openMenu ? 'show-nav active' : 'show-nav'}>
				<span />
				<span />
				<span />
			</div>
		</div>
	)
}
}

export default Hamburger;