import axios from 'axios';
import { Jumbotron, Spinner, Alert } from 'react-bootstrap';
import React from 'react';
import Card from './Card.jsx';
import MyModal from './MyModal.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const baseUrl = 'https://boiling-refuge-66454.herokuapp.com/images';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      activePictureData: null,
      requestState: '',
      showModal: false,
      form: {
        name: '',
        comment: '',
      },
    };
  }

  async componentDidMount() {
    try {
      const res = await axios.get(baseUrl);
      this.setState({ items: res.data });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  handleClick = (id) => async () => {
    const res = await axios.get(`${baseUrl}/${id}`);
    this.setState({ activePictureData: res.data });
    this.setState({ show: true });
  }

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
    const res = await axios.post(`${baseUrl}/${id}/comments`,
      { name, comment });
    console.log(res.status);
    this.setState({ form: { name: '', comment: '' }, show: false });
  };

  renderModal = () => {
    const pictureData = this.state.activePictureData;
    const { show, form } = this.state;
    if (pictureData) {
      return (
      <MyModal show={show} data={pictureData} onFormChange={this.handleChange}
       onFormSubmit={this.handleSubmit} formData={form} onHide={this.handleCloseModal}/>
      );
    }

    return pictureData;
  }

  handleCloseModal = () => {
    this.setState({ show: false });
  }

  handleShowModal = () => {
    this.setState({ show: true });
  }
  
  render() {
    const customStyle = {
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
      'min-height': '100vh',
    }; 
    return (
      <>
        {/* <div className="text-center" style = {customStyle}><Spinner  animation="border" style={{width: '13rem', height: '13rem'}}/></div>         */}
        <Alert variant='info' className="text-center">
          Something wrong with newtwork please try later
        </Alert>
        <Jumbotron className="text-center">
          <h1>TEST APP</h1>
        </Jumbotron>
        <div className="container">
          <div className="row justify-content-center">
            {this.renderPictures()}
          </div>
          {this.renderModal()}
        </div>
      </>
    );
  }
}
