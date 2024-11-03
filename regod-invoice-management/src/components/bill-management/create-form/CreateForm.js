import React from 'react';
import { Form, Input, Button, DatePicker, Row, Col } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const CreateForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  return (
    <Form name="create_form" onFinish={onFinish} autoComplete="off">
      <Form.Item
        name="Bill Id"
        label="Bill Id"
        rules={[{ required: true, message: 'Please input the bill id!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="billname"
        label="Bill Name"
        rules={[{ required: true, message: 'Please input the bill name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="duedate"
        label="Due Date"
        rules={[{ required: true, message: 'Please select the due date!' }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.List name="productList">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Row key={key} gutter={16}>
                <Col span={8}>
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
                    <Input placeholder="Count" type="number" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    {...restField}
                    name={[name, 'price']}
                    fieldKey={[fieldKey, 'price']}
                    rules={[{ required: true, message: 'Please input the price!' }]}
                  >
                    <Input placeholder="Price" type="number" />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Col>
              </Row>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Product
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateForm;

