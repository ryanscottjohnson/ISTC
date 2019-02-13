import React from 'react';
import './site-location.scss';

// import { renderWhen } from '../../../lib/utility.js';

class Location extends React.Component {

  render() {
    return (
      <div className="site-location">
        <h3> Section > Page Title</h3>
        {/* <div className="site-location-text">
        {renderWhen(
          props.siteLocation,
          <p>{props.siteLocation}</p>
          <h3> Section > Page Title</h3>
        )}
      </div> */}
      </div>
    )
  }
}

export default Location;