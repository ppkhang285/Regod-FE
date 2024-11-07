import { Table } from "antd";
import ActionButtons from "../../action-buttons/ActionButtons";

function InvoiceTable(props){
    const invoiceList = props.invoiceList

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
          title: 'Invoice ID',
          dataIndex: 'invoiceID',
          key: 'invoiceID',
        },
        {
          title: 'Bill ID',
          dataIndex: 'billID',
          key: 'billID',
        },
        {
            title: 'Bill name',
            dataIndex: 'billName',
            key: 'billName'
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
            render: (_, record) => <> {record.total} VND </>
        },
        {
            title: 'Paid date',
            dataIndex: 'paidDate',
            key: 'paidDate',
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
        <Table dataSource={invoiceList} columns={columns} pagination={false}/>

    );

}

export default InvoiceTable;