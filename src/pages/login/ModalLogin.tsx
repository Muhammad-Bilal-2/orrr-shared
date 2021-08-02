import * as React from 'react';
import { Col, Button, Form } from 'react-bootstrap';

interface IModalLoginProps {
  modal: string;
  body: string;
  endpoint: string;
}

export const ModalLogin: React.FC<IModalLoginProps> = (props) => {
  const handleReminder = () => {
    console.log('Email has been sent to endpoint', props.endpoint);
  };

  return (
    <Col lg="12">
      <p>{props.body}</p>
      <Form.Label htmlFor={`loginInput${props.modal}`}>
        {props.modal === 'User Name' ? 'Email address' : 'User Name'}
      </Form.Label>
      <Form.Control
        type="text"
        id={`loginInput${props.modal}`}
        className="mb-4"
      />
      <Button color="primary" onClick={handleReminder} size="lg">
        Send Reminder
      </Button>
    </Col>
  );
};
