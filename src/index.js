import React from 'react';
import ReactDOM from 'react-dom';
import NAVBAR from './navbar';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import MetamaskProvider from './utils/MetamaskProvider';
import './index.css';
import RouteFile from './route'; // Import RouteFile correctly

ReactDOM.render(
  <MetamaskProvider>
    <AppProvider>
      <BrowserRouter>
        <NAVBAR />
        <RouteFile />
      </BrowserRouter>
    </AppProvider>
  </MetamaskProvider>,
  document.getElementById('root')
);
