import *as React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom';
import App from '../App';
import LoginComponent from '../components/login/index';

export default class Routers extends React.Component {
  public render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path="/login" component={LoginComponent} />
            <Route path='/' component={App} />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}
