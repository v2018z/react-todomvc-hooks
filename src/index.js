import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import 'todomvc-app-css/index.css';

const rootEl = document.getElementById('root');
rootEl.setAttribute('class', 'todoapp');

render(<App />, document.getElementById('root'));
