import * as React from "react";
import { Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLock } from "@fortawesome/free-solid-svg-icons";
import { LoadingButton } from "./../index";

export interface IModalLoginProps {
  loading: boolean;
  closeModal: React.Dispatch<React.SetStateAction<string>>;
  status: string;
  handleReminder: (
    modal: "username" | "password",
    value: string
  ) => Promise<void>;
  showError: () => void;
}

export const ForgotPasswordModal: React.FC<IModalLoginProps> = ({
  loading,
  closeModal,
  status,
  handleReminder,
  showError,
}) => {
  const [value, setValue] = React.useState<string>("");

  return (
    <Col className="text-center d-flex flex-column align-items-center px-3 px-sm-5">
      <FontAwesomeIcon icon={faUserLock} size="7x" />
      <h3 className="mt-3 mb-1 font-weight-bold">Reset Password</h3>
      <p className="text-muted text-center mb-3">
        Enter your User Name to receive a password reset link at the email
        address on file
      </p>
      <Form.Label className="align-self-start">User Name</Form.Label>
      <Form.Control
        className="mb-2 text-muted"
        type="text"
        id={`loginInputPassword`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="User Name"
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
          onClick={() => handleReminder("password", value)}
        />
      </div>
    </Col>
  );
};
