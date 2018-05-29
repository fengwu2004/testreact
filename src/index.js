import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { MainPage } from './views/MainPage'
import { HistoryPage } from "./views/HistoryPage";
import './mock/index'

ReactDOM.render(<HistoryPage/>, document.getElementById('root'));
registerServiceWorker();
