import React from "react";
import ListItems from "./ListNavItems.jsx";
import { getPages } from "../../helpers/navigation-helpers";
import ListNavPages from "./ListNavPages.jsx";
class TertiaryNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }
  render() {
    const { navLevel, navPageId, id } = this.props;
    console.log("nav level from tertiary:", this.props);
      const filteredPages = getPages(this.props);
      console.log("props from tertiary:", filteredPages);
      return (
        //nav would items point to content pages in real life.
        <div className={`tertiary-nav ${navLevel === 3 && navPageId == id ? "active" : "inactive"}`}>
          <ul>
          <ListNavPages {...this.props}  />
          </ul>
        </div>
      );
  }
}

export default TertiaryNav;
