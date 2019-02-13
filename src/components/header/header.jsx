import React from 'react';
import Hamburger from '../nav/hamburger.jsx';
import './header.scss';

class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <div className="header__logo" />
        <Hamburger
					menuOpen={this.props.menuOpen}
					handleMenuOpenClose={this.props.handleMenu}
				/>
       
      </div>
    )
  }
}

export default Header;