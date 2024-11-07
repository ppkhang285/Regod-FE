import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BillMainPage from '../components/bill-management/main-page/BillMainPage'
import InvoiceMainPage from '../components/invoice-management/main-page/InvoiceMainPage';
import NavBar from '../components/nav-bar/NavBar';
function App(){

  const [bills, setBills] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.243.182:8080/bills')
      .then(response => {
     
        setBills(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);



  return(

    <InvoiceMainPage/>

  );
}

export default App;