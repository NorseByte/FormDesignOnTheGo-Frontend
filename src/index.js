import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* Import Browser */
import {BrowserRouter} from "react-router-dom";

/* Import Provider */
//import {Provider} from "react-redux";

/* Import Store */
//TODO: CREATE STORE AND IMPORT FOR PROVIDER AND ADD PROVIDER

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
