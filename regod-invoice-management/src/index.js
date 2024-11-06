import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import App from './routes/App';
import BillMainPage from './components/bill-management/main-page/BillMainPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/bill",
    element: <BillMainPage/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <RouterProvider router={router} /> */}
    <App/>
  </React.StrictMode>
);


