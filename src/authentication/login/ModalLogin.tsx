import * as React from "react";
import { Col, Form, Button } from "react-bootstrap";
import * as Sentry from "@sentry/react";
// import { ApiPostRequest } from "../../services/fetchService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faUserCog,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";
import { LoadingButton } from "../../Buttons/LoadingButton";

interface IModalLoginProps {
  modal: string;
  text: string;
  endpoint: string;
  onClick?: () => void;
}

export const ModalLogin: React.FC<IModalLoginProps> = ({
  modal,
  text,
  endpoint,
  onClick,
}) => {
  const [value, setValue] = React.useState<string>("");
  const [status, setStatus] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  // const handleForgottenCredentials = async (value: string) => {
  //   const bodyArg: { [key: string]: { [key: string]: string } } = {
  //     Username: { emailAddress: value },
  //     Password: { LoginId: value },
  //   };
  //   let body = JSON.stringify(bodyArg[modal]);
  //   return await new ApiPostRequest(endpoint, body)
  //     .Invoke()
  //     .then((result) => result.json())
  //     .catch((error) => {
  //       Sentry.captureException(error);
  //     });
  // };

  // const handleReminder = async (value: string) => {
  //   try {
  //     if (value.trim() === "") {
  //       return setStatus("Empty");
  //     }
  //     setLoading(true);
  //     const response = await handleForgottenCredentials(value);
  //     setLoading(false);
  //     setStatus(response.Code || "Failed");
  //   } catch (error) {
  //     Sentry.captureException(error);
  //   }
  // };

  const errorMessage = () => {
    return (
      <p className="mt-0 text-danger">
        {status === "Failed"
          ? "An error occured, please try again or contact support"
          : "The field cannot be empty"}
      </p>
    );
  };

  return (
    <Col className="text-center d-flex flex-column align-items-center px-3 px-sm-5">
      {status === "Success" ? (
        <>
          <FontAwesomeIcon
            className="modal-success-icon"
            icon={faCheckCircle}
            size="10x"
          />
          <h2 className="mb-1">Success!</h2>
          <p>
            You will receive your{" "}
            {modal === "Username" ? "username" : "password"} shortly
          </p>
        </>
      ) : (
        <>
          {modal === "Username" ? (
            <FontAwesomeIcon icon={faUserCog} size="7x" />
          ) : (
            <FontAwesomeIcon icon={faUserLock} size="7x" />
          )}
          <h3 className="mt-3 mb-1 font-weight-bold">
            {modal === "Username" ? "Retrieve User Name" : "Reset Password"}
          </h3>
          <p className="text-muted text-center mb-3">{text}</p>
          <Form.Label className="align-self-start">
            {modal === "Username" ? "Email Address" : "User Name"}
          </Form.Label>
          <Form.Control
            className="mb-2 text-muted"
            type="text"
            id={`loginInput${modal}`}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={modal === "Username" ? "Email Address" : "User Name"}
          />
          {status && status !== "Success" ? errorMessage() : null}
          <div className="my-2 px-2 d-flex justify-content-around flex-column flex-sm-row w-sm-100">
            <Button
              className="mb-2 mb-sm-0 text-muted"
              variant="white"
              onClick={onClick}
            >
              Cancel
            </Button>
            <LoadingButton
              isLoading={loading}
              defaultText={"Send reminder"}
              loadingText={"Loading"}
            />
          </div>
        </>
      )}
    </Col>
  );
};
