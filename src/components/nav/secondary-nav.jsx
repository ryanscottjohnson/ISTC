
import React from "react";
import ListNavCategories from "./list-nav-categories.jsx";
import { getPages } from "../../helpers/navigation-helpers";
import TertiaryNav from "./tertiary-nav.jsx";

import { getCategories } from "../../helpers/navigation-helpers";

class SecondaryNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navLevel, navItems, navItemId, id } = this.props;
      return (
        <div className={`secondary-nav ${navLevel >= 2 && navItemId == id ? "active" : "inactive"}`}>
          <ul>
            <ListNavCategories {...this.props} />
          </ul>
        </div>
      );
  }
}

export default SecondaryNav;
