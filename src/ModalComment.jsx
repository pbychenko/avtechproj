import React from 'react';

export default class ModalComment extends React.Component {
  render() {
    const { text, date } = this.props;
    const newDate = date !== null ? new Date(date) : date;
    console.log(newDate.toDateString());
    return (
      <div className="card">
        <div className="card-body">
          <p className="card-title">{newDate.toDateString()}</p>
          <p className="card-text">{text}</p>
        </div>
      </div>
    );
  }
}
