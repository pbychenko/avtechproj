import React from 'react';
import { Modal } from 'react-bootstrap';
import ModalComments from './ModalComments.jsx';

const MyModal = (props) => {
  const {
    show, data, formData, onFormChange, onFormSubmit, onHide,
  } = props;
  const isValidForm = formData.name !== '' && formData.comment !== '';

  return (
  <Modal show={show} onHide={onHide} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered animation='true'>
        <Modal.Header closeButton className="border-0 pb-0" >
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="card border-0">
            <div className="card-body pt-0">
              <div className="row">
                <div className="container col-sm-8">
                  <img className="bd-placeholder-img card-img-top mb-4" width="100%" src={data.url} />
                  <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                      <input type="text" className="form-control" name="name" onChange={onFormChange} value = {formData.name }/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" name="comment" onChange={onFormChange} value = {formData.comment }/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" width="100%" disabled={!isValidForm}>Submit</button>
                  </form>
                </div>
                <ModalComments data={data.comments} />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>);
};

export default MyModal;
