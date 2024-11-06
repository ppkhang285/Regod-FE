import BillInfo from "./BillInfo";
import { Table, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

function InvoiceTable(props){
    const billInfoes = props.billInfoes

    const handleDelete = (id) =>{
        console.log(id)
    }

    const columns = [
        {
          title: 'No',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Bill ID',
          dataIndex: 'billId',
          key: 'departmentName',
        },
        {
          title: 'Bill Name',
          dataIndex: 'total',
          key: 'billName',
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total'
        },
        {
            title: 'Due Date',
            dataIndex: 'dueDate',
            key: 'dueDate'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (_, record) =>{
                if (record.status == 0) return (<p style={{color: "blue"}}>PENDING</p>)
                if (record.status == 1) return (<p style={{color: "green"}}>PAID</p>)
                if (record.status == 2) return (<p style={{color: "red"}}>OVERDUE</p>)
            }
        },
        {
            title: 'No',
            dataIndex: 'no',
            key: 'id',
            render: (_, record) => <> 
                <Button onClick={() =>handleDelete(record.id)} icon={<DeleteOutlined style={{ color: 'red' }}/>} type="link"/>
            </>
          },
      ];
      
      
    return(
        <Table dataSource={billInfoes} columns={columns} pagination={false}/>

    );

}

export default InvoiceTable;