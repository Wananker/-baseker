import React from "react";
import {render} from "react-dom";
import {Router, Route, hasHistory} from "react-router";
import {Provider} from "react-redux";
import App from "./containers/App";
import About from './containers/About';
import configureStore from './store/configureStore.prod'

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={hasHistory}>
            <Route path="/" component={App}/>
            <Route path="/about" component={About}/>
        </Router>
    </Provider>,
    document.getElementById('app'));