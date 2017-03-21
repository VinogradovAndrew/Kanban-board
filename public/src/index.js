import React from 'react';
import ReactDOM from 'react-dom';
import Root from './js/Root';
import configureStore from './js/configureStore';
import './css/style.css';

let store = configureStore();

ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
);
 