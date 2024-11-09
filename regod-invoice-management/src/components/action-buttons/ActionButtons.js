import { Button } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Link, useNavigate, useNavigation } from "react-router-dom";

function ActionButtons(props){

    const id = props.id
    const handleDelete = props.handleDelete
    const handleEdit = props.handleEdit
    const handleDetail = props.handleDetail

    const navigate = useNavigate()

    return(
        <div>
            <Button onClick={() =>{handleDetail(id); navigate(id)}} icon={<EyeOutlined style={{ color: '#07D000' }}/>} type="link"/>
            <Button onClick={() =>handleEdit(id)} icon={<EditOutlined style={{ color: '#BACB00' }}/>} type="link"/>
            <Button onClick={() =>handleDelete(id)} icon={<DeleteOutlined style={{ color: 'red' }}/>} type="link"/>
        </div>
        

    );

}

export default ActionButtons;