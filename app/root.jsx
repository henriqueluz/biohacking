import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose  } from 'redux';
import { IndexRedirect, Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import firebase from 'firebase';

import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

import count from './reducers/count.js';
import activities from './reducers/activities.js';

import Base from './components/base.jsx';
import Activities from './components/activities/list.jsx';
import NewActivity from './components/activities/newactivity.jsx';
import Search from './components/search/search.jsx';

export default class Root extends React.Component {
  render() {

    const reducers = combineReducers({
      routing: routerReducer,
      count,
      activities
    });

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
      reducers,
      compose(
        applyMiddleware(sagaMiddleware)
      )
    );

    window.store = store;

    sagaMiddleware.run(sagas);

    firebase.initializeApp({
      apiKey: "AIzaSyDGYMxpnYaAJYyquEUM6Y__yQjhPP_skx0",
      authDomain: "feedback-140018.firebaseapp.com",
      databaseURL: "https://feedback-140018.firebaseio.com",
      storageBucket: "feedback-140018.appspot.com",
      messagingSenderId: "71457068040",
    });

    const history = syncHistoryWithStore(browserHistory, store);

    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Base}>
            <IndexRedirect to="/new" />
            <Route path="/search" component={Search} />
            <Route path="/activities" component={Activities} />
            <Route path="/new" component={NewActivity} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
