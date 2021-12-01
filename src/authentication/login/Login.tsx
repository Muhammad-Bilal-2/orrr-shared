import * as React from "react";
import { useState } from "react";
import styles from "./Login.module.scss";
import { Row, Col, Container } from "react-bootstrap";
import { LoginImage } from "./LoginImage";
import { LoginForm } from "./LoginForm";
import { AuthError, LoginFunction } from "../Authentication";
import { ModalLogin } from "./ModalLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { CenteredSpinner } from "../../Spinner/index";
import { LoginModalOverlay } from "./LoginModalOverlay";

export interface ILogin {
  error: AuthError | null;
  loading?: boolean;
  signIn: LoginFunction;
  isAutoLogin?: boolean;
  logo?: string;
  //////
}

export const Login: React.FC<ILogin> = ({
  error,
  loading,
  signIn,
  isAutoLogin,
  logo,
}) => {
  const [showModal, setShowModal] = useState<string>("");
  const handleToggleModal = () => setShowModal("");
  if (loading) {
    return (
      <CenteredSpinner
        loading={true}
        size="lg"
        loadingText="Authenticating..."
      />
    );
  } else {
    return (
      <div className="content h-100">
        {showModal === "username" && (
          <LoginModalOverlay show={!!showModal} setShow={handleToggleModal}>
            <ModalLogin
              modal="Username"
              text="Enter you email address in the form below and we will send the user name we can match to your email address"
              endpoint={process.env.REACT_APP_FORGOT_USERNAME_URL || ""}
              onClick={handleToggleModal}
            />
          </LoginModalOverlay>
        )}
        {showModal === "password" && (
          <LoginModalOverlay show={!!showModal} setShow={handleToggleModal}>
            <ModalLogin
              modal="Password"
              text="Enter your User Name in the form below and we will send you further instrutctions on how to reset your password."
              endpoint={process.env.REACT_APP_FORGOT_PASSWORD_URL || ""}
              onClick={handleToggleModal}
            />
          </LoginModalOverlay>
        )}

        <Row className={styles.loginContainer}>
          <Col xs={12} lg={7} className="h-100 p-0">
            <Container
              fluid
              className="d-flex align-items-center justify-content-center h-100"
            >
              <LoginForm
                loading={loading}
                error={error}
                signIn={signIn}
                isAutoLogin={isAutoLogin}
                setShowModal={setShowModal}
                logo={logo}
              />
            </Container>
          </Col>

          <Col xs={12} lg={5} className="h-100 px-0">
            <LoginImage
              header="Lorem ipsum ?"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"
              imgUrl={`${process.env.REACT_APP_CDN_URL}/netsite/login2.jpg`}
            >
              <h2 className={styles.loginInfoTitle}>Lorem ipsum Online...</h2>
              <p>
                {" "}
                for all fire protection systems, located in any facility across
                the country
              </p>
              <ul>
                <li>Inspections Report</li>
                <li>Proposals/ Pricing</li>
                <li>Invoices</li>
                <li>System Drawings</li>
                <li>Owner Manual's</li>
              </ul>
              <div className={styles.loginInfoLink}>
                <div className={styles.loginInfoLinkHover}></div>
                <a href={process.env.REACT_APP_ORR_NETREPORT_URL}>Learn more</a>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </LoginImage>
          </Col>
        </Row>
      </div>
    );
  }
};
