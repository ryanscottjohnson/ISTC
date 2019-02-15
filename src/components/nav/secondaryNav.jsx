import React from 'react';
import ListItems from './ListItems.jsx';
import { getCategories } from '../../helpers/navigation-helpers'
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

      return (
        <div className={`secondary-nav ${navLevel>=2?"active":"inactive"}` } >
        <ul>
          <ListItems {...this.props} navItems={filteredCategories} handleClick={this.props.handleClick} level={3} />
          </ul>
        </div>
      )

  };
}

export default SecondaryNav;