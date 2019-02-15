import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Landing from './landing/landing.jsx';
import MainNav from './nav/MainNav.jsx';
import Header from './header/header.jsx';

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Route exact path="/" component={Landing} />
          {/* <Safety exact path="/safety" component={Safety} />
          <Training exact path="/training" component={Training} /> */}
        </React.Fragment>
      </Router>

    )
  }
}

export default App;
