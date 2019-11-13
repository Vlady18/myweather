import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from 'redux'
import {rootReducer} from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {BrowserRouter, HashRouter} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'

const store = createStore(rootReducer, applyMiddleware(thunk))
window.store = store
const app =
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
