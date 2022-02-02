import axios from 'axios';
import { Jumbotron, Spinner, Alert } from 'react-bootstrap';
import React from 'react';
import Card from './Card.jsx';
import MyModal from './MyModal.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const baseUrl = 'https://boiling-refuge-66454.herokuapp.com/images';
const centerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
};
const spinnerSizeStyle = {
  width: '13rem',
  height: '13rem',
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      activePictureData: null,
      requestState: '',
      showModal: false,
      showErrorBlock: false,
      form: {
        name: '',
        comment: '',
      },
    };
  }

  componentDidMount() {
    this.getDataRequest();
  }

  getDataRequest = async (id) => {
    const uri = baseUrl + (id ? `/${id}` : '');
    this.setState({ requestState: 'processing' }, async () => {
      try {
        const res = await axios.get(uri);
        if (id) {
          this.setState({ requestState: 'success', activePictureData: res.data, showModal: true });
        } else {
          this.setState({ requestState: 'success', items: res.data });
        }
      } catch (error) {
        this.setState({ requestState: 'failed', showErrorBlock: true });
        throw error;
      }
    });
  }

  handleClick = (id) => () => this.getDataRequest(id);

  renderPictures = () => {
    const { items } = this.state;
    return (
      items.map((el) => <Card key={el.id} src={el.url} onClickAction={this.handleClick(el.id)}/>)
    );
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const { form } = this.state;
    this.setState({ form: { ...form, [name]: value } });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, comment } = this.state.form;
    const { id } = this.state.activePictureData;

    try {
      this.setState({ requestState: 'processing' });
      await axios.post(`${baseUrl}/${id}/comments`, { name, comment });
      this.setState({ requestState: 'success', form: { name: '', comment: '' }, showModal: false });
    } catch (error) {
      this.setState({ requestState: 'failed', showErrorBlock: true });
      throw error;
    }
  };

  renderModal = () => {
    const { showModal, form, activePictureData } = this.state;

    return (
      activePictureData && <MyModal
        show={showModal}
        data={activePictureData}
        onFormChange={this.handleChange}
        onFormSubmit={this.handleSubmit}
        formData={form}
        onHide={this.handleCloseModal}
      />
    );
  }

  handleCloseModal = () => {
    this.setState({ showModal: false, form: { name: '', comment: '' } });
  }

  handleShowModal = () => {
    this.setState({ showModal: true });
  }

  render() {
    const { requestState } = this.state;
    console.log('requestState', requestState)

    if (requestState === 'processing') {
      return (<div className="text-center" style={centerStyle}><Spinner animation="border" style={spinnerSizeStyle} /></div>);
    }
    return (
      <>
        <Jumbotron className="text-center">
          <h1>TEST APP</h1>
        </Jumbotron>
        {requestState === 'success' ? (
          <div className="container">
            <div className="row justify-content-center">
              {this.renderPictures()}
            </div>
            {this.renderModal()}
          </div>
        ) : (
        <Alert variant='info' className="text-center">
          Something wrong with newtwork please try later
        </Alert>
        )}
      </>
    );
  }
}
