import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BillMainPage from './components/bill-management/main-page/BillMainPage'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BillMainPage/>
  </React.StrictMode>
);


reportWebVitals();
