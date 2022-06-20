import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import StatesFoodsProvider from './context/StatesFoodsProvider';
import GlobalStyle from './styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StatesFoodsProvider>
        <GlobalStyle />
        <App />
      </StatesFoodsProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
