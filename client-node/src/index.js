import React from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute, hasHistory} from "react-router";
import {Provider} from "react-redux";
import App from "./containers/App";
import About from "./containers/About";
import Counter from "./containers/Counter";
import Home from "./containers/Home";
import Article from "./containers/Article";
import ArticleAdd from "./containers/ArticleAdd";
import configureStore from "./store/configureStore.prod";

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={hasHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="counter" component={Counter}/>
                <Route path="about" component={About}/>
                <Route path="article">
                    <IndexRoute component={Article}/>
                    <Route path="add/:id" component={ArticleAdd}/>
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app'));

