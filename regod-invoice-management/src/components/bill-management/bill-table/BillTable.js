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
          render: (id, record, index) => { ++index; return index; },
        },
        {
            title: 'ID',
            dataIndex: 'supplierBillID',
            key: 'supplierBillID',
        },
        {
          title: 'Department Name',
          dataIndex: 'departmentName',
          key: 'departmentName',
        },
        {
          title: 'Bill Name',
          dataIndex: 'billName',
          key: 'billName',
        },
        {
            title: 'Total',
            dataIndex: 'totalCost',
            key: 'totalCost',
            render: (_, record) => <> {record.totalCost} VND </>
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
                if (record.status == "pending") return (<p style={{color: "blue"}}>PENDING</p>)
                if (record.status == 'paid') return (<p style={{color: "green"}}>PAID</p>)
                if (record.status == 'overdue') return (<p style={{color: "red"}}>OVERDUE</p>)
            }
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'id',
            render: (_, record) => <> 
                <ActionButtons 
                    id = {record.id} 
                    handleDelete ={props.handleDelete}
                    handleDetail = {props.handleDetail}
                    handleEdit = {handleEdit}

                />
            </>
          },
      ];
      
      
    return(
        <Table dataSource={billList} columns={columns} pagination={false} key={billList}/>

    );

}

export default BillTable;