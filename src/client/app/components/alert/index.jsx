import { Alert } from 'antd';

const AlertContent = ({ message, type }) => (
  <div className='alert-content-container'>
    <Alert message={message} type={type} />
  </div>
);

export default AlertContent;
