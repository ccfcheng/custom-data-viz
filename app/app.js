import document from 'global/document';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import HomeContainer from './Home/HomeContainer';

const appContainer = document.getElementById('app');

render((
    <Router history={browserHistory}>
      <Route path="/" component={HomeContainer}/>
    </Router>
), appContainer);
