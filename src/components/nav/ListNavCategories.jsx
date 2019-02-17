/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import TertiaryNav from "./TertiaryNav.jsx";
import { getPages } from '../../helpers/navigation-helpers'

class ListNavCategories extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCategoriesItems(props) {
    // console.log("props from List Categories: ", props);
    //console.log("filteredPages", filteredPages);
    return this.props.categories.map((item) => {
      if (item.navigate) {
        const {navPageId, handleClick} = this.props
        const filteredPages = getPages(this.props, item.id);
        // console.log("level from List Categories: ", props);
        return (
          <li className={item.id === navPageId? 'selected': ''}
            key={item.id}
            onClick={(e) => {
              props.handleClick(e, 3, item.id, item.name);
            }}
          >
            {item.name}
            <i className="arrow fas fa-angle-right" />
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
