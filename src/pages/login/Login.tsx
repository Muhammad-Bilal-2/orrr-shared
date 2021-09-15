import * as React from "react";
import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { ModalOverlay } from "../../Overlays/ModalOverlay";
import { LoginForm } from "./LoginForm";
import { LoginImage } from "./LoginImage";
import { ModalLogin } from "./ModalLogin";
// import { AuthError } from '../Authentication';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export interface AuthError {
  message: string;
  details: object;
}
export interface ILogin {
  login?: (username: string, password: string) => void;
  loading?: boolean | undefined;
  error?: AuthError | null;
}

export const Login: React.FC<ILogin> = () =>
  // { login }
  {
    const [showModal, setShowModal] = useState<string>("");
    const handleToggleModal = () => setShowModal("");

    return (
      <div className="content h-100">
        {showModal === "username" && (
          <ModalOverlay
            show={!!showModal}
            setShow={handleToggleModal}
            header="Forgot User Name"
          >
            <ModalLogin
              modal="Username"
              body="Enter you email address to receive a User Name Reminder"
              endpoint=""
            />
          </ModalOverlay>
        )}
        {showModal === "password" && (
          <ModalOverlay
            show={!!showModal}
            setShow={handleToggleModal}
            header="Forgot Password"
          >
            <ModalLogin
              modal="Password"
              body="Enter your User Name to receive a password reset link at the email
              address on file"
              endpoint=""
            />
          </ModalOverlay>
        )}

        <Row className="login-container h-100 m-0">
          <Col xs={12} lg={7} className="h-100 p-0">
            <Container
              fluid
              className="d-flex align-items-center justify-content-center h-100"
            >
              <LoginForm
                loading={false}
                // login={login}
                // error={error}
                setShowModal={setShowModal}
              />
            </Container>
          </Col>
          <Col xs={12} lg={5} className="h-100 px-0">
            <LoginImage
              imgUrl="https://cdn.orrprotection.com/netsite/login2.jpg"
              header="WHAT IS NETSITE?"
              text="NetSITE provides secure, online access to all critical information
          related to any fire protection system at any facility or site
          serviced by ORR"
            >
              <h2 className="info-heading">All Documentation Online...</h2>
              <ul className="documentation-list">
                for all fire protection systems, located in any facility across
                the country
                <li>Inspections Report</li>
                <li>Proposals/ Pricing</li>
                <li>Invoices</li>
                <li>System Drawings</li>
                <li>Owner Manual's</li>
              </ul>
              <div className="login-info-link">
                <div className="login-info-link-hover"></div>
                <a href={process.env.REACT_APP_ORR_NETREPORT_URL}>Learn more</a>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </LoginImage>
          </Col>
        </Row>
      </div>
    );
  };
