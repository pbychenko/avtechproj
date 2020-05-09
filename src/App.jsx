import axios from 'axios';
import 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';
import Card from './Card.jsx';
import MyModal from './MyModal.jsx';

const baseUrl = 'https://boiling-refuge-66454.herokuapp.com/images';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      activePictureData: null,
      show: false,
      form: {
        name: '',
        comment: '',
      },
    };
  }

  async componentDidMount() {
    const res = await axios.get(baseUrl);
    this.setState({ items: res.data });
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
    console.log(id);
    const res = await axios.post(`${baseUrl}/${id}/comments`,
      { name, comment });
    console.log(res.status);
    this.setState({ form: { name: '', comment: '' } });
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
    return (
      <div className="container">
        <div className="row">
          {this.renderPictures()}
        </div>
        {this.renderModal()}
      </div>
    );
  }
}
