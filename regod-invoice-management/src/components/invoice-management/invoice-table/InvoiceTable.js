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
          render: (id, record, index) => { ++index; return index; },
        },
        {
          title: 'Bill   ID',
          dataIndex: 'supplierBillID',
          key: 'supplierBillID',
        },
        {
            title: 'Bill name',
            dataIndex: 'billName',
            key: 'billName'
        },
        {
            title: 'Total',
            dataIndex: 'totalCost',
            key: 'totalCost',
            render: (_, record) => <> {record.totalCost} VND </>
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