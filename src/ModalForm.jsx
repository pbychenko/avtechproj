import React from 'react';

export default class ModalForm extends React.Component {
  render() {
    // const { src, onClick } = this.props;
    return (
      <form>
        <div className="form-group">
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary btn-block" width="100%">Submit</button>
      </form>
    );
  }
}