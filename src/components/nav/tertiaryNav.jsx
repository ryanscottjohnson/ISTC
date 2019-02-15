import React from 'react';
import ListItems from './ListItems.jsx';
import { getPages } from '../../helpers/navigation-helpers'
import PagesListItems from './PagesListItems.jsx';
class TertiaryNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }

  }
  render() {

    const { level } = this.props;
    console.log("nav level from tertiary:", this.props)
    if (level >= 3) {
      const filteredPages = getPages(this.props);
    
    console.log("props from tertiary:", filteredPages)
      return (
        //nav would items point to content pages in real life.
        <div className="tertiary-nav">
          <ul>
            <PagesListItems navItems={filteredPages} itemType="pages"
              handleClick={this.props.handleClick}
              level={4} />
          </ul>
        </div>
      )
    } else {
     return null
    }
  };
}

export default TertiaryNav
