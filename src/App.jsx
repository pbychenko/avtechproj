import axios from 'axios';
import React from 'react';
// import ReactDOM from 'react-dom';
import Card from './Card.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
// // import $ from 'jquery';

// const app = () => {
//   // ReactDOM.render(
//   //   <Card />,
//   //   document.getElementById('test'),
//   // );
// };

// // const app = () => {
// //   $('#exampleModal').on('show.bs.modal', function (event) {
// //     const modalButton = $(event.relatedTarget);
// //     const recipient = modalButton.data('whatever');
// //     const modal = $(this);
// //     modal.find('.modal-body').text(recipient);
// //   });
// // };


// export default app;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      // inputValue: '',
    };
  }

  componentDidMount() {
    axios.get('https://boiling-refuge-66454.herokuapp.com/images')
    .then((response) => {
      this.setState({ items: response.data });
    });
  }

  renderPictures = () => {
    const { items } = this.state;
    return (
      items.map((el) => <Card key={el.id} src={el.url} />)
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderPictures()}
        </div>
      </div>
    );
  }
}
