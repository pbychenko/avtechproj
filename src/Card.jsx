// @ts-check
/* eslint-disable react/prefer-stateless-function */

import React from 'react';

export default class Card extends React.Component {
  render() {
    const { src } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <img src={src} className="card-img-top" alt="..."/>
          {/* <h4 className="card-title">Card title</h4>
          <p className="card-text">Some quick example text to build on the card</p>
          <button type="button" className="btn btn-primary">Go somewhere</button> */}
        </div>
      </div>
    );
  }
}