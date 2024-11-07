import { useState, useEffect } from "react";
import BillTable from "../bill-table/BillTable"
import { Button, Modal } from "antd";
import CreateForm from "../create-form/CreateForm";
import axios from 'axios';
function BillMainPage(props){

    const [isOpen, setIsOpen] = useState(false)
    const [bills, setBills] = useState([]);
    // Get data for Table
    let billList =[
        {id: 1, departmentName :"Department Name", billName: "Bill Name", total: 200000, dueDate :"03/11/2024", status: 0},
        {id: 2, departmentName :"Department Name", billName: "Bill Name", total: 200000, dueDate :"03/11/2024", status: 1},
        {id: 3, departmentName :"Department Name", billName: "Bill Name", total: 200000, dueDate :"03/11/2024", status: 2}
    ];

    
  // Get Data from API
    useEffect(() => {
        axios.get('http://192.168.243.182:8080/bills')
        .then(response => {
        
            setBills(response.data);
            
        })
        .catch(error => {
          
            console.error(error);
        });
    }, []);
   //let billList = props.billList;
    console.log(billList)

    const onFormOpen = () =>{
        
        setIsOpen(true)
    }

    const onFormClose = () =>{
        setIsOpen(false)
    }
    
    return(
        <div style={{paddingLeft: 50, paddingRight: 50}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <h1>Bill Management</h1>
                
                <div className="buttons" style={{marginBottom: "15px"}}>
                    <Button type="primary" onClick={onFormOpen} style={{float: "right"}}>Create</Button>
                </div>

                <BillTable billList ={billList}/>
            </div>
            
            <Modal open={isOpen} onCancel={onFormClose} onClose={onFormClose}>
                <CreateForm />
            </Modal>
        </div>
        
        
    );

}

export default BillMainPage;