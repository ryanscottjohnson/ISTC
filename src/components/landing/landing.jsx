import React from 'react';
import Header from '../header/header.jsx';

import './landing.scss';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <section id="landing-page">
        <div className="greeting">

          <p>Welcome Back!</p>

        </div>
        <div className="landing">
          <p>Content</p>
        </div>


      </section>
 
    )
  }
}

export default Landing;
