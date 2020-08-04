import React from 'react';
import ModalComment from './ModalComment.jsx';

const ModalComments = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className="container col-sm-4">
      <ul className="list-group">
        { data.map((el) => <ModalComment key={el.id} text={el.text} date={el.date} />) }
      </ul>
    </div>
  );
};

export default ModalComments;
