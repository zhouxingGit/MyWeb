import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from "./App"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppRouter/>, document.getElementById('root'));
serviceWorker.unregister();
