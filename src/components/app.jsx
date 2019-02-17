import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Landing from './landing/landing.jsx';
import MainNav from './nav/main-nav.jsx';
import Header from './header/header.jsx';

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Route exact path="/" component={Landing} />
        </React.Fragment>
      </Router>

    )
  }
}

export default App;
