import React from 'react';
import Landing from './landing/landing.jsx';
import Header from './header/header.jsx';
import Footer from './footer/footer.jsx';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header /> 
        <Landing />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
