import React from 'react';

export default class ModalComment extends React.Component {
  render() {
    const { text, date } = this.props;
    const newDate = date !== null ? new Date(date) : date;
    return (
      <div className="card  border-0">
        <div className="card-body">
          <p className="card-text text-muted">{newDate.toDateString()}</p>
          <p className="card-text">{text}</p>
        </div>
      </div>
    );
  }
}
