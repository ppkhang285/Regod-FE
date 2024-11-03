import { useState } from "react";
import BillList from "../BillList/BillList";
import { Button, Modal } from "antd";
import CreateForm from "../create-form/CreateForm";

function MainPage(props){

    const [isOpen, setIsOpen] = useState(false)

    // let billInfoes =[
    //     {id: 1, departmentName :"Department Name", billName: "Bill Name", total: "200.000 VND", dueDate :"03/11/2024", status: 0},
    //     {id: 2, departmentName :"Department Name", billName: "Bill Name", total: "200.000 VND", dueDate :"03/11/2024", status: 1},
    //     {id: 3, departmentName :"Department Name", billName: "Bill Name", total: "200.000 VND", dueDate :"03/11/2024", status: 2}
    // ];
    let billInfoes = props.billInfoes;
    console.log(billInfoes)
    const onCreateButton = () =>{
        
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
                    <Button type="primary" onClick={onCreateButton} style={{float: "right"}}>Create</Button>
                </div>

                <BillList billInfoes ={billInfoes}/>
            </div>

            
            <Modal open={isOpen} onCancel={onFormClose} onClose={onFormClose}>
                <CreateForm />
            </Modal>
        </div>
        
        
    );

}

export default MainPage;