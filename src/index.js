import React from 'react';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';

const store = configureStore();

React.render(
  <Provider store={store}>
    {() => <App store={store}/>}
  </Provider>,
  document.getElementById('root')
);

