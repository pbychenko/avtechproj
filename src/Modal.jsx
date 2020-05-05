import React from 'react';
// import ModalForm from './ModalForm.jsx';
import ModalComments from './ModalComments.jsx';
import ModalHeader from './ModalHeader.jsx';

export default class Modal extends React.Component {
  render() {
    const { data, formData, onFormChange, onFormSubmit } = this.props;
    console.log(data);
    // console.log(this.props);
    // const { form } = this.state;
    // console.log(this.state);
    // const { form } = this.state;
    // console.log(form);
    // console.log(data);
    // const src =
    return (
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
          <div className="modal-content">
            <ModalHeader />
            <div className="modal-body">
                <div className="card">
                  <div className="card-body">
                    <div className="row"> 
                      <div className="container col-sm-8">
                        <img className="bd-placeholder-img card-img-top" width="100%" src={data.url} />
                        <form onSubmit={onFormSubmit}>
                          <div className="form-group">
                            <input type="text" className="form-control" name="name" onChange={onFormChange} value = {formData.name }/>
                          </div>
                          <div className="form-group">
                            <input type="text" className="form-control" name="comment" onChange={onFormChange} value = {formData.comment }/>
                          </div>
                          <button type="submit" className="btn btn-primary btn-block" width="100%">Submit</button>
                        </form>
                      </div>
                      <ModalComments data={data.comments}/>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      </div>
    );
  }
}