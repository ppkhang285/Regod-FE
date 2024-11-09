import { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import InvoiceTable from '../invoice-table/InvoiceTable'
import axios from "axios";


function InvoiceMainPage(props){

    const [isFormOpen, setIsFormOpen] = useState(false)
    const [invoices, setInvoices] = useState([]);

    // Get data for Table
    let invoiceList =[
        {id: 1, departmentName :"Department Name", billName: "Bill Name", total: 200000 , dueDate :"03/11/2024", status: 0, paidDate:"04/11/2024"},
        {id: 2, departmentName :"Department Name", billName: "Bill Name", total: 200000, dueDate :"03/11/2024", status: 1, paidDate:"04/11/2024"},
        {id: 3, departmentName :"Department Name", billName: "Bill Name", total: 200000, dueDate :"03/11/2024", status: 2, paidDate:"04/11/2024"}
    ];
    
    const getData = () => {
        axios.get('http://172.20.10.2:8090/invoices')
            .then(response => {
                setInvoices(response.data);
            })
            .catch(error => {
                console.error(error);
            });
        };

    useEffect(() => {
        getData();
    }, []);

    const onFormOpen = () =>{
        
        setIsFormOpen(true)
    }

    const onFormClose = () =>{
        setIsFormOpen(false)
    }
    return(
        <div style={{paddingLeft: 50, paddingRight: 50}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <h1>Invoice Management</h1>
                
                <div className="buttons" style={{marginBottom: "15px"}}>
                    <Button type="primary" onClick={onFormOpen} style={{float: "right"}}>Create</Button>
                </div>

                <InvoiceTable invoiceList ={invoices.data}/>
            </div>
            
            {/* <Modal open={isOpen} onCancel={onFormClose} onClose={onFormClose}>
                <CreateForm />
            </Modal> */}
        </div>
        
        
    );

}

export default InvoiceMainPage;