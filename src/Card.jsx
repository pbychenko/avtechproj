// @ts-check
/* eslint-disable react/prefer-stateless-function */

import React from 'react';

export default class Card extends React.Component {
  render() {
    const { src, onClick } = this.props;
    return (
      <div className="card">
        <div className="card-body" data-toggle="modal" data-target="#exampleModal" onClick={onClick}>
          <img src={src} className="card-img-top" alt="..."/>
        </div>
      </div>
    );
  }
}
