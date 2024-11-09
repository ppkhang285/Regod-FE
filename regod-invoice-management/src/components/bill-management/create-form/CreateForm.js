import React, { useState, useEffect } from 'react';
import { Form, Input, Button, DatePicker, Row, Col, Typography, ConfigProvider, Upload } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
    

const { Title } = Typography;

const CreateForm = (props) => {
  const [form] = Form.useForm();
  const [total, setTotal] = useState(0);

  const onFinish = (values) => {

    props.onSubmit(values)
    
  };

  const onUploadChange = ({ fileList }) => {
    console.log('File list:', fileList);
  };


  const onCancel = () => {
    console.log('Form cancelled');
    props.onCancel()
    
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
      <div style={{ maxWidth: '800px', maxHeight: '1059px', margin: '0 auto', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', height: 'auto' }}>
        <Title level={1} style={{ textAlign: 'center', color: '#1677FF' }}>Create New Bill!</Title>
        <Form form={form} name="create_form" onFinish={onFinish} autoComplete="off" layout="vertical" requiredMark={false}>
          <Form.Item
            name="billId"
            label={<span style={{ fontWeight: 'bold' }}>Bill Id</span>}
            rules={[{ required: true, message: 'Please input the bill id!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="billname"
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
                        label={<span style={{ fontWeight: 'bold' }}>Product Name</span>}
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
                        label={<span style={{ fontWeight: 'bold' }}>Count</span>}
                        rules={[{ required: true, message: 'Please input the count!' }]}
                      >
                        <Input placeholder="Count" type="number" onChange={calculateTotal} />
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Form.Item
                        {...restField}
                        name={[name, 'price']}
                        fieldKey={[fieldKey, 'price']}
                        label={<span style={{ fontWeight: 'bold' }}>Price</span>}
                        rules={[{ required: true, message: 'Please input the price!' }]}
                      >
                        <Input placeholder="Price" type="number" onChange={calculateTotal} />
                      </Form.Item>
                    </Col>
                    <Col span={4}>
                      <MinusCircleOutlined onClick={() => { remove(name); calculateTotal(); }} style={{ color: '#ff4d4f', fontSize: '20px', marginTop: '40px' }} />
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
            <Input value={total} readOnly />
          </Form.Item>

          <Form.Item label="Upload Image">
            <Upload
              listType="picture-card"
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

export default CreateForm;