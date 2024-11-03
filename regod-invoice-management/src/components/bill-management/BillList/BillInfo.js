

function BillInfo(props){
    let billInfoes = props.billInfoes;

    return (
        billInfoes.map((billInfo, index) => (
            <tr key={index}>
                <td>{billInfo.no}</td>
                <td>{billInfo.departmentName}</td>
                <td>{billInfo.billName}</td>
                <td>{billInfo.total} VND</td>
                <td>{billInfo.dueDate}</td>
                <td>1</td>
            </tr>
        ))
            
    );
}
export default BillInfo;