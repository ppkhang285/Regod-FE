import { Header } from "antd/es/layout/layout";
import { Menu, Button, Badge } from "antd";
import { BellOutlined } from '@ant-design/icons';


function NavBar(){
    
    const items = [
        { key: 1, label: "Bill Manager", style: { padding: "0 80px", minWidth: "200px", fontSize: "16px" } },
        { key: 2, label: "Invoice Manager", style: { padding: "0 80px", minWidth: "200px", fontSize: "16px" } },
        { key: 3, label: "Request", style: { padding: "0 80px", minWidth: "200px", fontSize: "16px" } },
    ];


    return(
        <Header
            style={{
            display: 'flex',
            alignItems: 'center',
            color: "blue",
            backgroundColor: "#50AAEB",
            justifyContent: 'space-between'
            }}
        >
        <div  />
            <h1 style={{
              fontSize: "36px",
              color: "#FFFFFF",
              textShadow: `
                  -5px -5px 0 #47C5FF,
                  5px -5px 0 #47C5FF,
                  -5px 5px 0 #47C5FF,
                  5px 5px 0 #47C5FF,
                  0px -5px 0 #47C5FF,
                  0px 5px 0 #47C5FF,
                  -5px 0px 0 #47C5FF,
                  5px 0px 0 #47C5FF
                `,
               marginRight: "50px",
            }}>
              REGOD
            </h1>
            <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items}
            style={{
                flex: 1,
                minWidth: 0,
                backgroundColor: "#50AAEB",
            }}
            />
            {/* Notification Icon Button */}
                        <Button
                            icon={
                                <Badge count={5}>
                                    <BellOutlined style={{ fontSize: '24px', color: '#FFFFFF' }} />
                                </Badge>
                            }
                            style={{
                                backgroundColor: 'transparent',
                                border: 'none',
                                color: '#FFFFFF',
                                padding: '0',
                            }}
                            onClick={() => alert("Notifications clicked")} // Handle click event
                        />
      </Header>
    );

}

export default NavBar;