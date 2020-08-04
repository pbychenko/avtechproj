import React from 'react';

const Card = ({ src, onClickAction }) => (
    <div className="card" onClick={onClickAction}>
      <div className="card-body">
        <img src={src} className="card-img-top" alt="..."/>
      </div>
    </div>
);

export default Card;
