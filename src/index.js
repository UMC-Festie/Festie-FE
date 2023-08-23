import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import { UserProvider } from './UserContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    <BrowserRouter>
    <UserProvider>
      <App />
      </UserProvider>
    </BrowserRouter>
  </CookiesProvider> //쿠키provider //최상위 컴포넌트에서 UserProvider로 컴포넌트 트리를 감싸야 함
);