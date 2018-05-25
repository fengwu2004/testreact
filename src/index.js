import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { MainPage } from './views/MainPage'

ReactDOM.render(<MainPage />, document.getElementById('root'));
registerServiceWorker();
