import React from 'react';
// import Header from '../header/header.jsx';
// import Footer from '../footer/footer.jsx';
// import Location from '../site-locaiton/location.jsx';
import ListItems from './ListItems.jsx';
import { join } from 'path';
class SecondaryNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }

  }
  getCategories() {
    const filteredCategories = this.props.categories.filter((x)=>{
      if (x.referenceId == this.props.navCategory) {
        return x;
      }
      else{
        return false;
      }
    })
    .map((item, index) => {
      return item ;
    }
    );
    console.log("filteredCategories: ",filteredCategories);
    return filteredCategories;// this.setState({ categories: filteredCategories });
  }
  render() {
    const filteredCategories = this.getCategories();
    const { navLevel } = this.props;

    if (navLevel > 1) {
      return (
        <ul><ListItems navItems={filteredCategories} handleClick={this.handleClick} level={3} /></ul>
      )
    }
    else {
      return null
    }

  };
}

export default SecondaryNav