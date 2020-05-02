import React from 'react';

export default class ModalComment extends React.Component {
  render() {
    const { text, date } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <p className="card-title">{date}</p>
          <p className="card-text">{text}</p>
        </div>
      </div>
    );
  }
}
