import axios from 'axios';
import React from 'react';

import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle';
// import ReactDOM from 'react-dom';
import Card from './Card.jsx';
import Modal from './Modal.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      activePictureData: null,
      form: {
        name: '',
        comment: '',
      },
    };
  }

  componentDidMount() {
    axios.get('https://boiling-refuge-66454.herokuapp.com/images')
    .then((response) => {
      this.setState({ items: response.data });
    });
  }

  handleClick = (id) => () => {
    axios.get(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
    .then((response) => {
      this.setState({ activePictureData: response.data });
    });
    
  }

  renderPictures = () => {
    const { items } = this.state;
    return (
      items.map((el) => <Card key={el.id} src={el.url} onClick={this.handleClick(el.id)}/>)
    );
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const { form } = this.state;
    this.setState({ form: { ...form, [name]: value } });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, comment } = this.state.form;
    const id = this.state.activePictureData.id;
    console.log(id);
    // const { data } = await axios.post(routes.tasksPath(), { text: inputValue });
    axios.post(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`, {
      name, comment} )
    .then(function (response) {
      console.log(response.status);
    })
    this.setState({ form: {name: '', comment: '' } });
  };

  renderModal = () => {
    const data = this.state.activePictureData;
    const {form} = this.state;
    if (data) {
      return (<Modal data={data} onFormChange={this.handleChange} onFormSubmit={this.handleSubmit} formData={form}/>);
    }
    return data;
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
