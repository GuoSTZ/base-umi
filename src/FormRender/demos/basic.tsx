import { Button, Col, Row } from 'antd';
import { FormRender } from 'guos-components';
import { Form as IFrom } from 'guos-components/FormRender/dependencies/formilyCore';
import React from 'react';
import schema from './schema/basic.json';

const App = () => {
  let baseForm: IFrom;

  const handleSubmit = () => {
    baseForm.submit().then(console.log);
  };

  return (
    <>
      <FormRender getForm={(form) => (baseForm = form)} schema={schema} />
      <Row>
        <Col offset={schema.form.labelCol}>
          <Button type="primary" onClick={handleSubmit}>
            提交
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default App;
