import React from 'react';
import ReactDOM from 'react-dom';
import initReactFastclick from 'react-fastclick';
import VS from 'vconsole'
import ErrorBoundary from './ErrorBoundary'
import RouterConfig from "./routes";
import reportWebVitals from './reportWebVitals';
import '@/libs/font'

import { getQuery } from '@/utils'

initReactFastclick();
function regesiterVconsole() {
  if (process.env.NODE_ENV === 'development' || getQuery('kwt_debug') === 'on') {
    new VS() //开启vconsole调试
  }
}
regesiterVconsole() 

ReactDOM.render(
  <ErrorBoundary>
    <RouterConfig />
  </ErrorBoundary>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
