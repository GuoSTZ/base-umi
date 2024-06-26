import React, { memo } from 'react';
import { Form, Button } from 'antd';

import IdentityScope from './IdentityScope';

const formLayout = {
  labelCol: { span: 4 },
};

const App = () => {
  const [form] = Form.useForm();
  return (
    <Form form={form} {...formLayout} onFinish={console.log}>
      <IdentityScope />

      <Form.Item wrapperCol={{ offset: formLayout.labelCol.span }}>
        <Button htmlType="submit" type="primary">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default memo(App);
