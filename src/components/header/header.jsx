import React from 'react';
import Hamburger from '../nav/Hamburger.jsx';
import MainNav from '../nav/MainNav.jsx';
import BreadCrumb from './BreadCrumb.jsx';
import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navActive: false,
      level1: null,
      level2: null,
      level3: null
    };
    this.handleMenuOpenClose = this.handleMenuOpenClose.bind(this);
    this.getBreadcrumb = this.getBreadcrumb.bind(this);
  }
  handleMenuOpenClose() {
    this.setState((prevState) => ({
      navActive: !prevState.navActive,
    }))
  }

	// handleMenuOpenClose = () => {
	// 	this.setState({
	// 		menuOpen: !this.state.menuOpen,
	// 		menuOpenRight: false,
	// 		selectedSection: { categories: [] },
	// 		categoryIdArr: []
	// 	})
	// }

    getBreadcrumb(level, name) {

      switch (level){
        case 2:
        this.setState({
          level1: name,
          level2: null,
          level3: null
        });
        break;
        case 3: 
        this.setState({
          level2: name,
          level3: null
        });
        break;
        case 4:
        this.setState({
          level3: name
        });
        break;
    }
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
          <MainNav {...this.state} getBreadcrumb={this.getBreadcrumb} handleMenuOpenClose={this.handleMenuOpenClose}
 />
          <BreadCrumb {...this.state} />
        </React.Fragment>
      )
    }
  }

  export default Header;