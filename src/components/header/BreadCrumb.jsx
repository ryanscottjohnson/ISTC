/* eslint-disable react/prop-types */
import React from 'react';

// import './breadcrumb.scss';

class BreadCrumb extends React.Component {
  constructor(props) {
    super(props);
  }

  renderBreadCrumb() {
    const { level1, level2, level3 } = this.props;
    const breadcrumber = `${level1 != null ? level1 : 'Site Landing Page'} ${level2 != null ? ' > ' + level2 : ''} ${
      level3 != null ? ' > ' + level3 : ''
    }`;
    return breadcrumber;
  }

  render() {
    return <div className="breadcrumb">{this.renderBreadCrumb()}</div>;
  }
}
export default BreadCrumb;
