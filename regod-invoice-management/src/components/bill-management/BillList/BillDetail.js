import React, { useState } from 'react';
import { Form, Input, Typography, ConfigProvider, Image, Button, Modal, Table } from 'antd';
import BillEdit from './BillEdit';

const { Title, Text } = Typography;

const BillDetail = ({ bill }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(160);
  const [billId, setBillId] = useState('#031124');
  const [billName, setBillName] = useState('Bill 1');
  const [departmentName, setDepartmentName] = useState('Department 1');
  const [dueDate, setDueDate] = useState('2024-12-20');
  const [productList, setProductList] = useState([
    {
      key: '1',
      productname: 'Product 1',
      count: 2,
      price: 50,
    },
    {
      key: '2',
      productname: 'Product 2',
      count: 3,
      price: 20,
    },
  ]);
  const [status, setStatus] = useState('Pending');
  const [uploadedImages, setUploadedImages] = useState([
    {
      url: 'https://als.com.vn/api/file-management/file-descriptor/view/67843121-2b1d-6f72-eae6-3a0038844086',
    },
    {
      url: 'https://als.com.vn/api/file-management/file-descriptor/view/67843121-2b1d-6f72-eae6-3a0038844086',
    },
  ]);

  const onCreateButton = () => {
    setIsOpen(true);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };

  const columns = [
    {
      title: 'No.',
      dataIndex: 'no',
      key: 'no',
      render: (text, record, index) => index + 1, // Adds a row number starting from 1
    },
    {
      title: 'Product Name',
      dataIndex: 'productname',
      key: 'productname',
    },
    {
      title: 'Count',
      dataIndex: 'count',
      key: 'count',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1677FF',
        },
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px' }}>
        <Title level={1} style={{ textAlign: 'center', color: '#1677FF' }}>Bill Details</Title>
        <Form layout="vertical">
          <div className="buttons" style={{ marginBottom: "15px" }}>
            <Button type="primary" onClick={onCreateButton} style={{ float: "right" }}>Edit</Button>
          </div>
          <Modal
            open={isOpen}
            onCancel={handleCancel}
            width={800}
            bodyStyle={{ overflowY: 'auto' }}
            footer={null}
          >
            <BillEdit />
          </Modal>

          <Form.Item label={<span style={{ fontWeight: 'bold' }}>Bill ID</span>}>
            <Input value={billId} readOnly />
          </Form.Item>

          <Form.Item label={<span style={{ fontWeight: 'bold' }}>Bill Name</span>}>
            <Input value={billName} readOnly />
          </Form.Item>

          <Form.Item label={<span style={{ fontWeight: 'bold' }}>Department Name</span>}>
            <Input value={departmentName} readOnly />
          </Form.Item>

          <Form.Item label={<span style={{ fontWeight: 'bold' }}>Due Date</span>}>
            <Input value={dueDate} readOnly />
          </Form.Item>

          <Form.Item label={<span style={{ fontWeight: 'bold' }}>Status</span>}>
            <Input value={status} readOnly />
          </Form.Item>

          <Form.Item label={<span style={{ fontWeight: 'bold' }}>Product List</span>}>
            <Table
              dataSource={productList}
              columns={columns}
              pagination={false}
              bordered
            />
          </Form.Item>

          <Form.Item label={<span style={{ fontWeight: 'bold' }}>Total</span>}>
            <Text strong>{total} VNĐ</Text>
          </Form.Item>

          <Form.Item label={<span style={{ fontWeight: 'bold' }}>Uploaded Images</span>}>
            <Image.PreviewGroup>
              {uploadedImages.map((image, index) => (
                <Image key={index} src={image.url} alt={`uploaded image ${index + 1}`} style={{ margin: '10px' }} />
              ))}
            </Image.PreviewGroup>
          </Form.Item>
        </Form>
      </div>
    </ConfigProvider>
  );
};

export default BillDetail;
