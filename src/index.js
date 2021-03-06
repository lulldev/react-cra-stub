import React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

import Home from './pages/home/container';
import Posts from './pages/posts/container';

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/posts" component={Posts}/>
      </Switch>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

serviceWorker.unregister();
