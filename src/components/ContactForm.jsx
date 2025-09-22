
import React from 'react';
import { Form, Input, Button, message } from 'antd';

const ContactForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    alert("Form submitted");
    console.log('Form values:', values);

    message.success('Submitted successfully');

  
    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 700 }}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: 'Please enter your name' }]}
      >
        <Input placeholder="Your name" />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      >
        <Input placeholder="you@example.com" />
      </Form.Item>

      <Form.Item
        name="message"
        label="Message"
        rules={[
          { required: true, message: 'Please enter a message' },
          { min: 10, message: 'Message must be at least 10 characters' },
        ]}
      >
        <Input.TextArea rows={6} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit"  onClick={() => message.success("Test message ✅")}>
          Send Message
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
