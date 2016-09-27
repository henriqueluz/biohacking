import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose  } from 'redux';
import { IndexRedirect, Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware} from 'react-router-redux';

import firebase from 'firebase';
import moment from 'moment';

import createSagaMiddleware from 'redux-saga';
import sagas from 'sagas';

import count from 'reducers/count.js';
import user from 'reducers/user.js';
import activities from 'reducers/activities.js';
import kinds from 'reducers/kinds.js';

import Base from 'components/base.jsx';
import Activities from 'components/activities/list.jsx';
import NewActivity from 'components/activities/newactivity.jsx';
import Search from 'components/search/search.jsx';
import Login from 'components/user/login.jsx';

export default class Root extends React.Component {
  render() {

    const reducers = combineReducers({
      routing: routerReducer,
      user,
      count,
      kinds,
      activities,
    });

    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [
      routerMiddleware(browserHistory),
      sagaMiddleware,
    ];

    const store = createStore(
      reducers,
      compose(
        applyMiddleware(...middlewares),
        window.devToolsExtension && window.devToolsExtension()
      )
    );

    sagaMiddleware.run(sagas);

    firebase.initializeApp({
      apiKey: "AIzaSyDGYMxpnYaAJYyquEUM6Y__yQjhPP_skx0",
      authDomain: "feedback-140018.firebaseapp.com",
      databaseURL: "https://feedback-140018.firebaseio.com",
      storageBucket: "feedback-140018.appspot.com",
      messagingSenderId: "71457068040",
    });

    window.store = store;
    window.moment = moment;
    window.firebase = firebase;

    const history = syncHistoryWithStore(browserHistory, store);

    if (window.devToolsExtension) window.devToolsExtension.updateStore(store);

    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Base}>
            <IndexRedirect to="/activities" />
            <Route path="/search" component={Search} />
            <Route path="/activities" component={Activities} />
            <Route path="/new" component={NewActivity} />
            <Route path="/login" component={Login} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
