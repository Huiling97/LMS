import { useContext, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

import AlertContent from '../components/alert';
import { AuthContext } from '../store/auth-context';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const onFinish = async (values) => {
    try {
      await login(values.username, values.password);
      setError(null);
    } catch (e) {
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      {error && <AlertContent message={error} type='error' />}
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete='off'
      >
        <Form.Item
          label='Username'
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name='remember' valuePropName='checked' label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;

//
const handleFormChange = (e) => {
  const { name, value } = e.target;

  setForm({ ...form, [name]: value });
};
