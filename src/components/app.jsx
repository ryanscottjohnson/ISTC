import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './landing/landing.jsx';
import Header from './header/header.jsx';
import Footer from './footer/footer.jsx';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <BrowserRouter>
          <Landing exact path="/" component={Landing} />
        </BrowserRouter>
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
