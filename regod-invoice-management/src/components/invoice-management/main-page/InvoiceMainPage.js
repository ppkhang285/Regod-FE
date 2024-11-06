import { useState } from "react";
import BillList from "../BillList/BillList";
import { Button, Modal } from "antd";
import CreateForm from "../create-form/CreateForm";

function InvoiceMainPage(props){

    const [isFormOpen, setIsFormOpen] = useState(false)

    // Get data for Table
    let invoiceList =[
        {id: 1, departmentName :"Department Name", billName: "Bill Name", total: "200.000 VND", dueDate :"03/11/2024", status: 0, paidDate:"04/11/2024"},
        {id: 2, departmentName :"Department Name", billName: "Bill Name", total: "200.000 VND", dueDate :"03/11/2024", status: 1, paidDate:"04/11/2024"},
        {id: 3, departmentName :"Department Name", billName: "Bill Name", total: "200.000 VND", dueDate :"03/11/2024", status: 2, paidDate:"04/11/2024"}
    ];
    // let billInfoes = props.billInfoes;
    // console.log(billInfoes)

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

                <BillList invoiceList ={invoiceList}/>
            </div>
            
            {/* <Modal open={isOpen} onCancel={onFormClose} onClose={onFormClose}>
                <CreateForm />
            </Modal> */}
        </div>
        
        
    );

}

export default InvoiceMainPage;