import React from 'react';


class ListItems extends React.Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount(){
  //   renderListItems(this.props);
  // }
  renderListItems (props){
    
    return props.navItems.map((item, index) => {
      console.log(item);
      if(item.categories){
        return (<li key={item.id} onClick={(e)=>this.props.handleClick(e,this.props.level, item.id)}><i>font Icon here</i>{item.name}<i>font Icon here</i></li>)
      }
      return (<li key={item.id}>{item.name}</li>)
    });

  }

  render() {
      return (
        <React.Fragment>
          {this.renderListItems(this.props)}
        </React.Fragment>
      )
    }

  }
export default ListItems