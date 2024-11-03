import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BillMainPage from './components/bill-management/main-page/BillMainPage'
function App(){

  const [bills, setBills] = useState([]);

  useEffect(() => {
    axios.get('localhost:8080/bills')
      .then(response => {
        setBills(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);



  return(
   <BillMainPage/>
  //  <ul>
  //     {bills.map(bill => (
  //       <li key={bill.id}>{bill.departmentName}</li>
  //     ))}
  //   </ul>
  );
}

export default App;