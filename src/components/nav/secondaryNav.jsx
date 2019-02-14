import React from 'react';
import ListItems from './ListItems.jsx';
import {getCategories} from '../../helpers/navigation-helpers'
class SecondaryNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }

  }
  render() {
    const filteredCategories = getCategories(this.props);
    const { navLevel } = this.props;

    if (navLevel >= 2) {
      return (
        <ul><ListItems navItems={filteredCategories} handleClick={this.props.handleClick} level={3} /></ul>
      )
    }
    else {
      return null
    }

  };
}

export default SecondaryNav