import * as React from "react";
import { Col, Button, Form } from "react-bootstrap";

interface IReminderLinkProps {}

export const ModalForgotPassword: React.FC<IReminderLinkProps> = () => {
  const handleReminder = (type: IReminderLinkProps) => {
    console.log("Email with password been sent");
  };

  return (
    <Col lg="12">
      <h3>Password Reset</h3>
      <p>
        Enter your User Name to receive a password reset link at the email
        address on file
      </p>
      <Form.Label htmlFor="inputPassword">User Name</Form.Label>
      <Form.Control type="text" id="inputUsername" className="mb-4" />
      <Button color="primary" onClick={handleReminder} size="lg">
        Send Reminder
      </Button>
    </Col>
  );
};
