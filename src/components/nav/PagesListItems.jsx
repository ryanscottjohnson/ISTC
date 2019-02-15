import React from 'react';



class PagesListItems extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount(){
  //   renderListItems(this.props);
  // }

  renderPageListItems(props) {
    
    return props.navItems.map((item, index) => {
      return (<li key={item.id} onClick={e => this.props.handleClick(e, this.props.level, item.id, item.name, true)}>{item.name}</li>);
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.renderPageListItems(this.props)}
      </React.Fragment>
    );
  }
}
export default PagesListItems;
