import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'emotion-theming';

import store, { history } from './store/index.js';
import App from './app';
import theme from './ui/styles/theme';
import 'ui/styles/globalStyles';
const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>,
  target
);
