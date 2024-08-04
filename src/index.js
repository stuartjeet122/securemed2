import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from './contexts/AppContext';
import MetamaskProvider from './utils/MetamaskProvider';

ReactDOM.render(
  <MetamaskProvider>
    <AppProvider>
      <App />
    </AppProvider>
  </MetamaskProvider>,
  document.getElementById('root')
);
