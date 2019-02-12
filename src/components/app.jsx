import React from 'react';
import Home from './home/home.jsx';
import Header from './header/header.jsx';
import Footer from './footer/footer.jsx';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header /> 
        <Home />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
