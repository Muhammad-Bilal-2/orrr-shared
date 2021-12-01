import * as React from "react";
import { Card, Row, Col, Form, Button, FormControl } from "react-bootstrap";
import styles from "./Login.module.scss";
import { ILogin } from "./Login";

import * as yup from "yup";
import * as Sentry from "@sentry/react";
import { useFormik } from "formik";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoadingButton } from "../../Buttons/LoadingButton";
import { PasswordInput } from "../../Inputs/PasswordInput";
// import GoogleLog from "../../img/google-icon.svg";

interface ILoginForm extends ILogin {
  setShowModal: React.Dispatch<React.SetStateAction<string>>;
}
export interface ILoginData {
  username: string;
  password: string;
}

export const LoginForm: React.FC<ILoginForm> = (props) => {
  const schema = yup.object().shape({
    username: yup.string().trim().required("Username is required"),
    password: yup.string().trim().required("Password is required"),
  });

  const handleSubmit = async (values: ILoginData) => {
    try {
      if (props.signIn) {
        props.signIn(values.username, values.password);
      }
    } catch (error) {
      Sentry.captureException(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });
  return (
    <>
      <Form
        as={Col}
        xs={10}
        sm={8}
        md={6}
        lg={7}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            formik.handleSubmit();
          }
        }}
      >
        <Card className={styles.cardLoginForm}>
          <Card.Header>
            <Card.Title className={styles.loginHeading}>
              Welcome! <br />
              <span>Please sign in with your google account.</span>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            {props.error && (
              <div className={styles.loginErrorMessage}>
                {props.error.message}{" "}
              </div>
            )}

            <Form.Group className="mb-3">
              <Form.Label>USERNAME</Form.Label>
              <FormControl
                name="username"
                isInvalid={formik.touched.username && !!formik.errors.username}
                value={formik.values.username}
                onChange={formik.handleChange}
                type="text"
                placeholder="USERNAME"
                className={styles.loginInput}
              />
              <Form.Control.Feedback
                type="invalid"
                className={styles.invalidFeedback}
              >
                {formik.errors.username}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <PasswordInput
                label="PASSWORD"
                placeholder="PASSWORD"
                isInvalid={formik.touched.password && !!formik.errors.password}
                error={formik.errors.password}
                onChange={formik.handleChange}
                value={formik.values.password}
                name={"password"}
              />
            </Form.Group>
            <Row className={styles.loginHelpers}>
              <Col className={styles.loginHelpersContainer}>
                <Row
                  className={styles.forgotLinks}
                  onClick={() => props.setShowModal("password")}
                >
                  <span className="pr-2">Forgot Password</span>
                  <FontAwesomeIcon icon={faGreaterThan} size="xs" />
                </Row>
                <Row
                  className={styles.forgotLinks}
                  onClick={() => props.setShowModal("username")}
                >
                  <span className="pr-2">Forgot Username</span>
                  <FontAwesomeIcon icon={faGreaterThan} size="xs" />
                </Row>
              </Col>
              <Col className="d-flex justify-content-sm-end justify-content-center px-0 align-items-center">
                <LoadingButton
                  className={styles.loginBtn}
                  color="primary"
                  isLoading={props.loading}
                  defaultText={"Log in"}
                  loadingText={"Loading"}
                  onClick={() => formik.handleSubmit()}
                />
              </Col>
            </Row>

            <Row className={styles.loginHelpers}>
              <Col className="d-flex justify-content-center px-0 align-items-center mt-3">
                <Button variant="light" onClick={() => props.signIn()}>
                  <img
                    className={styles.imgSize}
                    src={props.logo}
                    alt="Google icon"
                  ></img>
                  Google Login
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Form>
    </>
  );
};
