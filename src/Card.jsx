import React from 'react';

export default class Card extends React.Component {
  render() {
    const { src, onClickAction } = this.props;
    return (
      <div className="card" onClick={onClickAction}>
        <div className="card-body" data-toggle="modal" data-target="#exampleModal" >
          <img src={src} className="card-img-top" alt="..."/>
        </div>
      </div>
    );
  }
}
