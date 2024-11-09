import React, { useState, useEffect } from 'react';
import { Form, Input, Row, Col, Typography, ConfigProvider, Upload, Image, Button, Modal, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import InvoiceEdit from './InvoiceEdit';

const { Title } = Typography;
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
const InvoiceDetail = ({ bill }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [total, setTotal] = useState(1600000);
  const [billId, setBillId] = useState('#101010');
  const [invoiceId, setInvoiceId] = useState('#031124');
  const [billName, setbillName] = useState('Bill 1');
  const [departmentName, setDepartmentName] = useState('Department 1');
  const [dueDate, setDueDate] = useState('2024-12-20');
  const [deposit, setDeposit] = useState(200000);
  const [paidDate, setPaidDate] = useState('2024-3-20');
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
  const [billImages, setBillImages] = useState([
    {
      url: 'https://als.com.vn/api/file-management/file-descriptor/view/67843121-2b1d-6f72-eae6-3a0038844086',
    },
    {
      url: 'https://als.com.vn/api/file-management/file-descriptor/view/67843121-2b1d-6f72-eae6-3a0038844086',
    },
  ]);
  const [invoiceImages, setInvoiceImages] = useState([
    {
      url: 'https://als.com.vn/api/file-management/file-descriptor/view/67843121-2b1d-6f72-eae6-3a0038844086',
    },
    {
      url: 'https://als.com.vn/api/file-management/file-descriptor/view/67843121-2b1d-6f72-eae6-3a0038844086',
    },
  ]);
  const { Text } = Typography;
  const onCreateButton = () => {
    setIsOpen(true);
  };
  const onModalClose = () => {
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1677FF',
        },
      }}
    >
      <div style={{ maxWidth: '800px', maxHeight: '1059px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', height: 'auto' }}>
        <Title level={1} style={{ textAlign: 'center', color: '#1677FF' }}>Invoice Detail</Title>
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
          <InvoiceEdit />
        </Modal>
        <div style={{ clear: "both" }}></div>

          <Form.Item
            label={<span style={{ fontWeight: 'bold' }}>Invoice ID</span>}
          >
            <Input value={invoiceId} readOnly />
          </Form.Item>

          <Form.Item
            label={<span style={{ fontWeight: 'bold' }}>Bill ID</span>}
          >
            <Input value={billId} readOnly />
          </Form.Item>

          <Form.Item
            label={<span style={{ fontWeight: 'bold' }}>Bill Name</span>}
          >
            <Input value={billName} readOnly />
          </Form.Item>

          <Form.Item
            label={<span style={{ fontWeight: 'bold' }}>Department Name</span>}
          >
            <Input value={departmentName} readOnly />
          </Form.Item>

          <Form.Item
            label={<span style={{ fontWeight: 'bold' }}>Due Date</span>}
          >
            <Input value={dueDate} readOnly />
          </Form.Item>
          <Form.Item
            label={<span style={{ fontWeight: 'bold' }}>Status</span>}
          >
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

          <Form.Item
            label={<span style={{ fontWeight: 'bold' }}>Deposit</span>}
          >
            <Text>{deposit.toLocaleString('vi-VN')} VNĐ</Text>
          </Form.Item>
          <Form.Item label={<span style={{ fontWeight: 'bold', fontSize: '20px' }}>Total</span>}>
            <Text strong style={{ fontSize: '20px' }}>{total.toLocaleString('vi-VN')} VNĐ</Text>
          </Form.Item>
          <Form.Item
            label={<span style={{ fontWeight: 'bold' }}>Paid Date</span>}
          >
            <Input value={paidDate} readOnly />
          </Form.Item>

          <Row gutter={6}>
            <Col span={12}>
              <Form.Item label={<span style={{ fontWeight: 'bold' }}>Bill Image</span>}>
                <Image.PreviewGroup>
                  {billImages.map((image, index) => (
                    <Image key={index} src={image.url} alt={`uploaded image ${index + 1}`} style={{ margin: '10px', width: '100px', height: '100px' }} />
                  ))}
                </Image.PreviewGroup>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label={<span style={{ fontWeight: 'bold' }}>Invoice Image</span>}>
                <Image.PreviewGroup>
                  {invoiceImages.map((image, index) => (
                    <Image key={index} src={image.url} alt={`uploaded image ${index + 1}`} style={{ margin: '10px', width: '100px', height: '100px' }} />
                  ))}
                </Image.PreviewGroup>
              </Form.Item>
            </Col>
          </Row>

          
        </Form>
      </div>
    </ConfigProvider>
  );
};

export default InvoiceDetail;