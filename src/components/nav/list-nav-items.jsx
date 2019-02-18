import React from 'react';
import SecondaryNav from './secondary-nav.jsx';
import TertiaryNav from './tertiary-nav.jsx';
import { getCategories } from '../../helpers/navigation-helpers';


class ListNavItems extends React.Component {
  constructor(props) {
    super(props);
  }
  renderListItems(props) {
    
    return props.navItems.map((item) => {
      
      if (item.navigate) {
        const {navItemId, navLevel, pages } = this.props
        const filteredCategories = getCategories(this.props, item.id);
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
