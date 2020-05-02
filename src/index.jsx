// import app from './app.jsx';

// app();
// import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle';


import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.jsx';

// import Autocomplete from './Autocomplete';

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
// console.log('test');

// $('#exampleModal').on('show.bs.modal', function (event) {
//   const modalButton = $(event.relatedTarget);
//   const recipient = modalButton.data('whatever');
//   const modal = $(this);
//   modal.find('.modal-body').text(recipient);
// });