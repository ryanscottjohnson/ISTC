/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from "react";
import ListNavCategories from "./ListNavCategories.jsx";
import { getPages } from "../../helpers/navigation-helpers";
import TertiaryNav from "./TertiaryNav.jsx";

import { getCategories } from "../../helpers/navigation-helpers";

class SecondaryNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navLevel, navItems, navItemId, id } = this.props;
    // if (navLevel >= 2) {
      console.log("from secondary Nav: ", this.props);
      return (
        <div className={`secondary-nav ${navLevel >= 2 && navItemId == id ? "active" : "inactive"}`}>
          <ul>
            <ListNavCategories {...this.props} />
          </ul>
        </div>
      );
    // }
    // return null;
  }
}

export default SecondaryNav;
