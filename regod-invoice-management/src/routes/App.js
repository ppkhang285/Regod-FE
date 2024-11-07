import React, { useState, useEffect } from 'react';

import BillMainPage from '../components/bill-management/main-page/BillMainPage'
import InvoiceMainPage from '../components/invoice-management/main-page/InvoiceMainPage';
import NavBar from '../components/nav-bar/NavBar';

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route
} from "react-router-dom";


function App(){

  return(
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<BillMainPage />} />
        <Route path="/bill" element={<BillMainPage />} />
        <Route path="/invoice" element={<InvoiceMainPage />} />
      </Routes>
    </BrowserRouter>

    

  );
}

export default App;