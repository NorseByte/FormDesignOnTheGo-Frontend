import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/* Import Browser */
import {BrowserRouter} from "react-router-dom";

/* Import Provider */
import {Provider} from "react-redux";

/* Import Store */
import store from "./store";

/* Import Mithera CSS*/
import "@dossier/mithra-ui/dist/ds.css"

ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));
