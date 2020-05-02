import React from 'react';

export default class ModalHeader extends React.Component {
  render() {
    // const { src, onClick } = this.props;
    return (
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}