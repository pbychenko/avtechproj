import React from 'react';
import ModalForm from './ModalForm.jsx';
import ModalComments from './ModalComments.jsx';
import ModalHeader from './ModalHeader.jsx';

export default class Modal extends React.Component {
  render() {
    const { data } = this.props;
    // console.log('here')
    console.log(data);
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
                        <ModalForm />
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