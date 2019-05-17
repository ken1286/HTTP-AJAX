import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import thunk from 'redux-thunk';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
  /* applyMiddleware goes here */
);

const AppWithRouter = withRouter(App);

ReactDOM.render(
                <Provider store={store}>
                <Router>
                  <AppWithRouter />
                  </Router>
                </Provider>, 
                document.getElementById('root')
              );
