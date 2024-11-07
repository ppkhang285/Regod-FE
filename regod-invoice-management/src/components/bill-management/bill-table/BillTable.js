import ActionButtons from "../../action-buttons/ActionButtons";
import { Table, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";



function BillTable(props){
    const billList = props.billList

    const handleDelete = (id) =>{
        console.log(id)
    }

    const handleEdit = (id) =>{
        console.log(id)
    }

    const handleDetail = (id) =>{
        console.log(id)
    }

    const columns = [
        {
          title: 'No',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Department Name',
          dataIndex: 'departmentName',
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
            title: 'Action',
            dataIndex: 'action',
            key: 'id',
            render: (_, record) => <> 
                <ActionButtons 
                    id = {record.id} 
                    handleDelete ={handleDelete}
                    handleDetail = {handleDetail}
                    handleEdit = {handleEdit}

                />
            </>
          },
      ];
      
      
    return(
        <Table dataSource={billList} columns={columns} pagination={false}/>

    );

}

export default BillTable;