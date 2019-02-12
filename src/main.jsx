import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';

// import './style/normalize.css';
// import './style/main.scss';

let root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<App />, root);