import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

const app = () => {
  ReactDOM.render(
    <Card />,
    document.getElementById('test'),
  );
};

export default app;
