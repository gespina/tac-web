import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import './index.css';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router routes={routes} />, document.getElementById('root'));
registerServiceWorker();
