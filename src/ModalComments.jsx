import React from 'react';
import ModalComment from './ModalComment.jsx';

export default class ModalComments extends React.Component {

  renderComments = () => {
    const { data } = this.props;
    if (data.length === 0) {
      return null;
    }
    return (
      data.map((el) => <ModalComment key={el.id} text={el.text} date={el.date} />)
    );
  }


  render() {
    // const { data } = this.props;
    // const { src, onClick } = this.props;
    return (
      <div className="container col-sm-4">
        <ul className="list-group">
          {this.renderComments()}
        </ul>
      </div>
    );
  }
}