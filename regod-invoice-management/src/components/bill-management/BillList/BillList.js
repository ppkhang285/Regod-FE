import { Table } from "react-bootstrap";
import BillInfo from "./BillInfo";


function BillList(props){
    return(
        <div>
            <Table bordered={true} >
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Department Name</th>
                        <th>Bill Name</th>
                        <th>Total</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <BillInfo/>
                </tbody>
            </Table>
        </div>

    );

}

export default BillList;