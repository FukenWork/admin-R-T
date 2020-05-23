import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routers from './routers/router';
import store from './redux/store/index';
import './vender/http-client'

import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store as any} >
    <Routers />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
