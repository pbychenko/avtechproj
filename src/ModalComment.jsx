import React from 'react';

const ModalComment = ({ text, date }) => {
  const newDate = date ? (new Date(date)).toDateString() : date;
  return (
    <div className="card border-0">
      <div className="card-body">
        <p className="card-text text-muted">{newDate}</p>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default ModalComment;
