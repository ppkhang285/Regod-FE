import { useState , useEffect} from "react";
import axios from 'axios';
import BillList from "../BillList/BillList";
import { Button, Modal } from "antd";
import CreateForm from "../create-form/CreateForm";

function MainPage(props){

    const [isOpen, setIsOpen] = useState(false)
    const [bills, setBills] = useState([]);

    // Get Bills data for Table
    useEffect(() => {
        axios.get('http://192.168.243.182:8080/bills')
            .then(response => {
            
                setBills(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    
    // let billInfoes =[
    //     {id: 1, departmentName :"Department Name", billName: "Bill Name", total: "200.000 VND", dueDate :"03/11/2024", status: 0},
    //     {id: 2, departmentName :"Department Name", billName: "Bill Name", total: "200.000 VND", dueDate :"03/11/2024", status: 1},
    //     {id: 3, departmentName :"Department Name", billName: "Bill Name", total: "200.000 VND", dueDate :"03/11/2024", status: 2}
    // ];
    let billInfoes = bills;
    console.log(billInfoes)

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

                <BillList billInfoes ={billInfoes}/>
            </div>
            
            <Modal open={isOpen} onCancel={onFormClose} onClose={onFormClose}>
                <CreateForm />
            </Modal>
        </div>
        
        
    );

}

export default MainPage;