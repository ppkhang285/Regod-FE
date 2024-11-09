import React, { useState, useEffect } from 'react';
import { Form, Input, Button, DatePicker, Row, Col, Typography, ConfigProvider, Upload } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';

const { Title } = Typography;

const EditBill = () => {
  const [billId, setBillId] = useState('#031124');
  const [billName, setBillName] = useState('Bill 1');
  const [departmentName, setDepartmentName] = useState('Department 1');
  const [duedate, setDueDate] = useState('2024-12-20');
  const [productList, setProductList] = useState([
    {
      productname: 'Product 1',
      count: 2,
      price: 50,
    },
    {
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
  const [form] = Form.useForm();
  const [total, setTotal] = useState(0);

  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  const onUploadChange = ({ fileList }) => {
    console.log('File list:', fileList);
  };

  const onCancel = () => {
    console.log('Form cancelled');
  };

  const calculateTotal = () => {
    const productList = form.getFieldValue('productList') || [];
    const newTotal = productList.reduce((acc, product) => {
      const count = product?.count || 0;
      const price = product?.price || 0;
      return acc + (count * price);
    }, 0);
    setTotal(newTotal);
  };

  useEffect(() => {
    form.setFieldsValue({ productList, billId, billName, departmentName, duedate: moment(duedate) });
    calculateTotal();
  }, [form]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1677FF',
        },
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px' }}>
        <Title level={1} style={{ textAlign: 'center', color: '#1677FF' }}>Edit Bill!</Title>
        <Form form={form} name="create_form" onFinish={onFinish} autoComplete="off" layout="vertical" requiredMark={false}>
          <Form.Item
            name="billId"
            label={<span style={{ fontWeight: 'bold' }}>Bill ID</span>}
            rules={[{ required: true, message: 'Please input the bill id!' }]}
          >
            <Input readOnly style={{ backgroundColor: '#f0f0f0', color: '#000' }} />
          </Form.Item>

          <Form.Item
            name="billName"
            label={<span style={{ fontWeight: 'bold' }}>Bill Name</span>}
            rules={[{ required: true, message: 'Please input the bill name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="departmentName"
            label={<span style={{ fontWeight: 'bold' }}>Department Name</span>}
            rules={[{ required: true, message: 'Please input the department name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="duedate"
            label={<span style={{ fontWeight: 'bold' }}>Due Date</span>}
            rules={[{ required: true, message: 'Please select the due date!' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Title level={5}>Product List</Title>
          <Row gutter={16} style={{ fontWeight: 'bold', marginBottom: '10px' }}>
            <Col span={2}>No.</Col>
            <Col span={6}>Product Name</Col>
            <Col span={4}>Count</Col>
            <Col span={6}>Price</Col>
            <Col span={4}>Action</Col>
          </Row>
          <Form.List name="productList">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, fieldKey, ...restField }, index) => (
                  <Row key={key} gutter={16}>
                    <Col span={2}>
                      <Form.Item>
                        <span style={{ fontWeight: 'bold' }}>{index + 1}</span>
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Form.Item
                        {...restField}
                        name={[name, 'productname']}
                        fieldKey={[fieldKey, 'productname']}
                        rules={[{ required: true, message: 'Please input the product name!' }]}
                      >
                        <Input placeholder="Product Name" />
                      </Form.Item>
                    </Col>
                    <Col span={4}>
                      <Form.Item
                        {...restField}
                        name={[name, 'count']}
                        fieldKey={[fieldKey, 'count']}
                        rules={[{ required: true, message: 'Please input the count!' }]}
                      >
                        <Input placeholder="Count" type="number" min={0} onChange={calculateTotal} />
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Form.Item
                        {...restField}
                        name={[name, 'price']}
                        fieldKey={[fieldKey, 'price']}
                        rules={[{ required: true, message: 'Please input the price!' }]}
                      >
                        <Input placeholder="Price" type="number" min={0} onChange={calculateTotal} />
                      </Form.Item>
                    </Col>
                    <Col span={4}>
                      <MinusCircleOutlined onClick={() => { remove(name); calculateTotal(); }} style={{ color: '#ff4d4f', fontSize: '20px', marginTop: '10px' }} />
                    </Col>
                  </Row>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => { add(); calculateTotal(); }}
                    block
                    icon={<PlusOutlined />}
                    style={{ borderColor: '#1677FF', color: '#1677FF' }}
                  >
                    Add Product
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.Item label={<span style={{ fontWeight: 'bold' }}>Total</span>}>
            <Input value={total} readOnly style={{ backgroundColor: '#f0f0f0', color: '#000' }} />
          </Form.Item>

          <Form.Item label="Upload Image">
            <Upload
              listType="picture-card"
              defaultFileList={uploadedImages}
              onChange={onUploadChange}
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Row justify="end" gutter={16}>
              <Col>
                <Button size="large" onClick={onCancel} style={{ backgroundColor: '#ffffff', color: '#1677FF', borderColor: '#1677FF' }}>
                  Cancel
                </Button>
              </Col>
              <Col>
                <Button size="large" type="primary" htmlType="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </div>
    </ConfigProvider>
  );
};

export default EditBill;
