import BillList from "../BillList/BillList";
import { Button } from "react-bootstrap";
function MainPage(props){

 

    let billInfoes =[
        {no: 1, departmentName :"Department Name", billName: "Bill Name", total: "200.000 VND", dueDate :"03/11/2024", status: 0}
    ];

    return(
        <div>
            <div>Bill Management</div>
            <Button variant="primary">Primary</Button>{' '}
            <BillList billInfoes ={billInfoes}/>
        </div>

        
    );

}

export default MainPage;