import React from 'react';
import TertiaryNav from './TertiaryNav.jsx';

// import PagesListItems from './PagesListItems.jsx'
// import { getPages } from '../../helpers/navigation-helpers'



class ListItems extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount(){
  //   renderListItems(this.props);
  // }
  // getPageItems(props){
  //   console.log("pages:", props);
  //   const filteredPages = getPages(props);
  //   return(
  //     <div className="tertiary-nav">
  //         <ul>
  //           <PagesListItems navItems={filteredPages} handleClick={this.props.handleClick} level={4} />
  //         </ul>
  //         </div> 
  //   )
  // }
  renderListItems(props) {
    console.log("props from ListItems: ",this.props)
    return props.navItems.map((item, index) => {
      if (item.navigate) {
        return (
          <li key={item.id} onClick={e => this.props.handleClick(e, this.props.level, item.id, item.name)}>
          <i className={item.icon}></i>
          {item.name}
          <i className="arrow fas fa-angle-right"></i>
          <TertiaryNav {...this.props} handleClick={this.handleClick} />

        </li>
);
      }
      return (
      
      <li key={item.id} onClick={e => this.props.handleClick(e, this.props.level, item.id, item.name, true)}>
      {this.props.navLevel == 1 ? <i className={item.icon}/> : ''}
      {item.name}</li>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.renderListItems(this.props)}
      </React.Fragment>
    );
  }
}
export default ListItems;
