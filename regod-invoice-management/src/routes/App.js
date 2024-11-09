import React, { useState, useEffect } from 'react';

import BillMainPage from '../components/bill-management/main-page/BillMainPage'
import InvoiceMainPage from '../components/invoice-management/main-page/InvoiceMainPage';
import NavBar from '../components/nav-bar/NavBar';
import BillDetail from '../components/bill-management/BillList/BillDetail';


import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  useParams
} from "react-router-dom";



function App(){

  const {billId} = useParams();
  return(
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<BillMainPage />} />
        
        <Route path="/bill" element={<BillMainPage />} />
        <Route path="/bill/:billId" element={<BillDetail />} />
        <Route path="/invoice" element={<InvoiceMainPage />} />
      </Routes>
    </BrowserRouter>

    

  );
}

export default App;