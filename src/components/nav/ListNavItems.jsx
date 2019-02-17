/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import SecondaryNav from './SecondaryNav.jsx';
import TertiaryNav from "./TertiaryNav.jsx";
import { getCategories } from "../../helpers/navigation-helpers";
// import PagesListItems from './PagesListItems.jsx'


class ListNavItems extends React.Component {
  constructor(props) {
    super(props);
  }
  renderListItems(props) {
    // console.log("props from ListItems: ", props);
    //const filteredPages = getPages(this.props, navCategory);
    //console.log("filteredPages", filteredPages);
    
    return props.navItems.map((item) => {
      
      if (item.navigate) {
        const {navItemId, navLevel, pages } = this.props
        const filteredCategories = getCategories(this.props, item.id);
        // console.log("props from List Nav Items: ",props);
        return (
          <li className={`primary-nav ${item.id === navItemId ? 'selected': ''}`}
            key={item.id}
            onClick={(e) => {
              props.handleClick(e, 2, item.id, item.name);
            }}
          >
            <i className={item.icon} />
            {item.name}
            <i className="arrow fas fa-angle-right" />
              <SecondaryNav {...props} id={item.id} categories={filteredCategories} />
            {/* {this.getNextNav(level)} */}
          </li>
        );
      }
      return (
        <li
          key={item.id}
          onClick={(e) => {
            props.handleClick(e, 2, item.id, item.name, true);
          }}
        >
        <i className={item.icon} />
          {item.name}
        </li>
      );
    });
  }

  render() {
    return <React.Fragment>{this.renderListItems(this.props)}</React.Fragment>;
  }
}
export default ListNavItems;
