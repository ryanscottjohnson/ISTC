import React from 'react';
import Hamburger from '../nav/hamburger.jsx';
import MainNav from '../nav/main-nav.jsx';
import BreadCrumb from './bread-crumb.jsx';
import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navActive: false,
      level1: null,
      level2: null,
      level3: null,
      menuOpen: false,
    };
    this.handleMenuOpenClose = this.handleMenuOpenClose.bind(this);
    this.getBreadcrumb = this.getBreadcrumb.bind(this);
  }

  handleMenuOpenClose(callback=()=>{}) {
    this.setState(prevState => ({
      navActive: !prevState.navActive,
      menuOpen: !prevState.menuOpen,
    }));
    callback();
  }

  getBreadcrumb(level, name) {
    switch (level) {
      case 2:
        this.setState({
          level1: name,
          level2: null,
          level3: null,
        });
        break;
      case 3:
        this.setState({
          level2: name,
          level3: null,
        });
        break;
      case 4:
        this.setState({
          level3: name,
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="header__logo" />
          <Hamburger menuOpen={this.state.menuOpen} handleMenuOpenClose={this.handleMenuOpenClose} />
        </div>
        <BreadCrumb {...this.state} />
        <MainNav {...this.state} getBreadcrumb={this.getBreadcrumb} handleMenuOpenClose={this.handleMenuOpenClose} />
      </React.Fragment>
    );
  }
}

export default Header;
