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

  renderModal = () => {
    const data = this.state.activePictureData;
    if (data) {
      return (<Modal data={data}/>);
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
