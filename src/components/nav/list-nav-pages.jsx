import React from "react";

class ListNavPages extends React.Component {
  constructor(props) {
    super(props);
  }

  renderPageListItems(props) {
    console.log("props from page list items:", props);
    return props.pages.map((item, index) => {
      return (
        <li key={item.id} onClick={(e) => props.handleClick(e, 4, item.id, item.name, true)}>
          {item.name}
        </li>
      );
    });
  }
  render() {
    return <React.Fragment>{this.renderPageListItems(this.props)}</React.Fragment>;
  }
}

export default ListNavPages;
