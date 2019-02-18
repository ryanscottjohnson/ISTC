import React from 'react';
import TertiaryNav from './tertiary-nav.jsx';
import { getPages } from '../../helpers/navigation-helpers';

class ListNavCategories extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCategoriesItems(props) {

    return this.props.categories.map((item) => {
      if (item.navigate) {
        const {navPageId, handleClick, tertiarySelected, toggleDropdown} = this.props
        const filteredPages = getPages(this.props, item.id);
        
        return (
          <li className={item.id === navPageId? 'selected': ''}
            key={item.id}
            onClick={(e) => {
              props.handleClick(e, 3, item.id, item.name, false, true);
            }}
          >
            {item.name}
            <i className={`arrow fas fa-angle-right ${tertiarySelected && item.id === navPageId ?'selected':''}`} onClick={(e)=>toggleDropdown(e)} />
            <TertiaryNav {...props} id={item.id} pages={filteredPages} />
          </li>
        );
      }
      return (
        <li
          key={item.id}
          onClick={(e) => {
            props.handleClick(e, 3, item.id, item.name, true);
          }}
        >
          {item.name}
        </li>
      );
    });
  }

  render() {
    return <React.Fragment>{this.renderCategoriesItems(this.props)}</React.Fragment>;
  }
}
export default ListNavCategories;
