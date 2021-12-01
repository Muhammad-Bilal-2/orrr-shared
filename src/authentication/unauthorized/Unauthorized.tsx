import * as React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styles from "./Unauthorized.module.scss";

interface IIndexProps {}

export const Unauthorized: React.FC<IIndexProps> = (props) => {
  const history = useHistory();

  const handleBack = () => {
    history.push("/login");
  };

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center h-100"
        fluid
      >
        <Row>
          <Col className={styles.unauthorizedWarining}>
            <Card className={styles.cardUnauthorized}>
              <Card.Body className="d-flex flex-column justify-content-center">
                <Card.Title className={styles.unauthorizedHeading}>
                  Unauthorized
                </Card.Title>
                <Card.Text className="mb-4">
                  Something has gone wrong. Please navigate back to the
                  beginning...
                </Card.Text>
                <Button
                  variant="primary"
                  className="unauthorizedBtn"
                  size="lg"
                  onClick={handleBack}
                >
                  Back home
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
