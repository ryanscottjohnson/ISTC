import React from 'react';
import Hamburger from '../nav/Hamburger.jsx';
import MainNav from '../nav/MainNav.jsx';
import './header.scss';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      navActive: false,
    };
    this.handleMenuOpenClose = this.handleMenuOpenClose.bind(this);
  }
handleMenuOpenClose(){
this.setState((prevState)=> ({
  navActive: !prevState.navActive,

}))

}
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="header__logo" />
          <Hamburger
            menuOpen={this.props.menuOpen}
            handleMenuOpenClose={this.handleMenuOpenClose}
          />
        </div>
        <MainNav {...this.state} />
      </React.Fragment>
    )
  }
}

export default Header;