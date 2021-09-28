import * as React from "react";
import { Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { LoadingButton } from "./../index";
import { IModalLoginProps } from "./ForgotPasswordModal";

export const ForgotUsernameModal: React.FC<IModalLoginProps> = ({
  loading,
  closeModal,
  status,
  handleReminder,
  showError,
}) => {
  const [value, setValue] = React.useState<string>("");

  return (
    <Col className="text-center d-flex flex-column align-items-center px-3 px-sm-5">
      <FontAwesomeIcon icon={faUserCog} size="7x" />
      <h3 className="mt-3 mb-1 font-weight-bold">"Retrieve User Name"</h3>
      <p className="text-muted text-center mb-3">
        Enter you email address in the form below and we will send the user name
        we can match to your email address
      </p>
      <Form.Label className="align-self-start">Email Address</Form.Label>
      <Form.Control
        className="mb-2 text-muted"
        type="text"
        id="loginInputUsername"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Email Address"
      />
      {status && status !== "Success" ? showError() : null}
      <div className="my-2 px-2 d-flex justify-content-around flex-column flex-sm-row w-sm-100">
        <Button
          className="mb-2 mb-sm-0 text-muted"
          variant="white"
          onClick={() => closeModal("")}
        >
          Cancel
        </Button>
        <LoadingButton
          isLoading={loading}
          defaultText={"Send reminder"}
          loadingText={"Loading"}
          onClick={() => handleReminder(value)}
        />
      </div>
    </Col>
  );
};
