

function BillInfo(props){
    let billInfo = props.billInfo;


    return (
            <tr >
                <td>{billInfo.no}</td>
                <td>{billInfo.departmentName}</td>
                <td>{billInfo.billName}</td>
                <td>{billInfo.total} VND</td>
                <td>{billInfo.dueDate}</td>
                <td>1</td>
            </tr>
            
    );
}
export default BillInfo;