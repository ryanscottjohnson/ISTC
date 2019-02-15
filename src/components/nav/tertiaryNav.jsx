import React from 'react';
import ListItems from './ListItems.jsx';
import { getPages } from '../../helpers/navigation-helpers'
class TertiaryNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }

  }
  render() {
    const filteredPages = getPages(this.props);
    const { navLevel } = this.props;

    if (navLevel >= 3) {
      return (
        //nav would items point to content pages in real life.
        <ul><ListItems navItems={filteredPages} itemType="pages" handleClick={this.props.handleClick} level={4} /></ul>
      )
    } else {
      return null
    }
  };
}

export default TertiaryNav
