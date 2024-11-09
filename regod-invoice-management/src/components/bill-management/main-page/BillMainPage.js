import { useState, useEffect } from "react";
import BillTable from "../bill-table/BillTable"
import { Button, Modal } from "antd";
import CreateForm from "../create-form/CreateForm";
import BillEdit from '../BillList/BillEdit'
import axios from 'axios';
function BillMainPage(props){

    const [isCreateOpen, setIsCreateOpen] = useState(false)
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [isDetailOpen, setIsDetailOpen] = useState(false)

    const [detailBill, setDetailBill] = useState(null)
    const [bills, setBills] = useState([]);
    
    
  // Get Data from API
    const getData = () => {
        axios.get('http://172.20.10.2:8090/bills')
            .then(response => {
                setBills(response.data);
            })
            .catch(error => {
                console.error(error);
            });
        };

    const postData = (data) =>{
    
        axios.post('http://172.20.10.2:8090/bills', data)
        .then(response => {
            if (response.data.code === 200){
                getData()
            }
        })
        .catch(error => {
            console.error('Error posting data:', error);
        });
    }

    

    useEffect(() => {
        getData();
    }, []);

    const onFormOpen = () =>{
        
        setIsCreateOpen(true)
    }

    const onFormClose = () =>{
        setIsCreateOpen(false)
    }

    const handleDelete = (id) =>{
        axios.delete(`http://172.20.10.2:8090/bills/${id}`)
        .then(response => {
            console.log('Data deleted successfully:', response.data);
            if (response.data.code === 200){
                getData()
            }
            
        })
        .catch(error => {
            console.error('Error deleting data:', error);
        });
    }

    const handleEdit = (id) =>{
        console.log(id)

    }


    const handleDetail = (id) =>{
       // console.log("Open edit ", id)
        setIsDetailOpen(true)
    }
    


    const onFormSubmit = (values) =>{
        const formattedData = {
            billName: values.billname, 
            departmentName: values.departmentName,
            createDate: new Date().toISOString(), 
            dueDate: values.duedate.format('YYYY-MM-DD'), 
            status: 'pending', 
            supplierBillID: values.billId,
            imgURl: values.imgURl || '', 
            totalCost: values.totalCost || 0,
            deposited: values.deposited || 0,
            payLeft: values.payLeft || 0,
            listProducts: values.productList.map(product => ({
                name: product.productname,
                price: parseFloat(product.price), 
                quantity: parseInt(product.count, 10), 
                total: parseFloat(product.count * product.price), 
            }))
        };
        postData(formattedData)
        setIsCreateOpen(false)
      
    }
    
    return(
        <div style={{paddingLeft: 50, paddingRight: 50}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <h1>Bill Management</h1>
                
                <div className="buttons" style={{marginBottom: "15px"}}>
                    <Button type="primary" onClick={onFormOpen} style={{float: "right"}}>Create</Button>
                </div>

                <BillTable billList ={bills.data} handleDetail={handleDetail} handleDelete={handleDelete}/>
            </div>
            
            <Modal open={isCreateOpen}  footer={null} onClose={onFormClose}  width= {800}>
                <CreateForm  onCancel={onFormClose} onClose={onFormClose} onSubmit={onFormSubmit}/>
            </Modal>

     
        </div>
        
        
    );

}

export default BillMainPage;