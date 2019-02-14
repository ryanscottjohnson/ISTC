import React from 'react';

import './landing.scss';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <div className="landing-page">
      //   test landing page
      // </div>
      <section id="landing-page">
        <div className="greeting">

          <p>Welcome Back!</p>

        </div>
      </section>

    )
  }
}

export default Landing;
