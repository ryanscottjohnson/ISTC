import React from "react";
import ListItems from "./list-nav-items.jsx";
import { getPages } from "../../helpers/navigation-helpers";
import ListNavPages from "./list-nav-pages.jsx";

class TertiaryNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }
  render() {
    const { navLevel, navPageId, id } = this.props;
      const filteredPages = getPages(this.props);
      return (
        //nav items would point to content pages in real life.
        <div className={`tertiary-nav ${navLevel === 3 && navPageId == id ? "active" : "inactive"}`}>
          <ul>
          <ListNavPages {...this.props}  />
          </ul>
        </div>
      );
  }
}

export default TertiaryNav;
