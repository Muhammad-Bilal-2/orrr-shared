import * as React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { LoginForm } from "./LoginForm";
import { LoginImage } from "./LoginImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Login.module.scss";

interface AuthError {
  message: string;
  details: object;
}

export interface ILoginData {
  username: string;
  password: string;
}

export interface ILogin {
  handleSubmit: (values: ILoginData) => void | Promise<void>;
  loading?: boolean;
  error: AuthError | null;
  setShowModal?: React.Dispatch<React.SetStateAction<string>>;
}

export const Login: React.FC<ILogin> = (props) => {
  return (
    <div className="content h-100">
      <Row className={styles.loginContainer}>
        <Col xs={12} lg={7} className="h-100 p-0">
          <Container
            fluid
            className="d-flex align-items-center justify-content-center h-100"
          >
            <LoginForm
              loading={props.loading}
              handleSubmit={props.handleSubmit}
              error={props.error}
              setShowModal={props.setShowModal!}
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
            <h2 className={styles.loginInfoTitle}>
              All Documentation Online...
            </h2>
            <p>
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
};
