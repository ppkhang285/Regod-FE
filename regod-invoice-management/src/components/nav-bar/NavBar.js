import { Header } from "antd/es/layout/layout";
import { Menu } from "antd";


function NavBar(){
    
    const items = [
        {key: 1, label: "Bill Manager"},
        {key: 2, label: "Invoice Manager"},
    ]


    return(
        <Header
            style={{
            display: 'flex',
            alignItems: 'center',
            color: "blue"
            }}
        >
        <div  />
            <h1>REGOD</h1>
            <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items}
            style={{
                flex: 1,
                minWidth: 0,
            }}
            />
      </Header>
    );

}

export default NavBar;