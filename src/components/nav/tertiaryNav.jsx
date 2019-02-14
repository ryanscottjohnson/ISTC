import React from 'react';
// import Header from '../header/header.jsx';
// import Footer from '../footer/footer.jsx';
// import Location from '../site-locaiton/location.jsx';

class TertiaryNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
      const {navLevel} = this.props
    if(navLevel > 2){
    return (
        
        <div>
        3rd  Nav  component

      </div>
          )
    }
    else{
      return null
    }

  }
}

export default TertiaryNav