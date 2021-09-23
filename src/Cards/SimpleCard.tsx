import * as React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { CenteredSpinner } from "../Spinner/index";
interface ISimpleCardProps {
  loading: boolean;
  header?: string;
  buttons?: React.ReactNode;
  isMobileView?: boolean;
  style?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  cardClass?: string;
  headerClass?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  bodyClass?: string;
}

export const SimpleCard: React.FC<ISimpleCardProps> = ({
  loading,
  header,
  buttons,
  isMobileView,
  style,
  bodyStyle,
  cardClass,
  headerClass,
  onClick,
  children,
  bodyClass,
}) => {
  return (
    <Card
      className={cardClass}
      style={style ? style : undefined}
      onClick={onClick}
    >
      {header && (
        <Card.Header className={headerClass}>
          <Row>
            <Col xs={isMobileView ? 12 : 8}>
              {isMobileView ? (
                <h3 className="card-title">{header}</h3>
              ) : (
                <h2 className="card-title">{header}</h2>
              )}
            </Col>
            {buttons && <Col>{buttons}</Col>}
          </Row>
        </Card.Header>
      )}
      {children && (
        <Card.Body className={bodyClass} style={bodyStyle ? bodyStyle : undefined}>
          <CenteredSpinner loading={loading} size={isMobileView ? "sm" : "md"}>
            {children}
          </CenteredSpinner>
        </Card.Body>
      )}
    </Card>
  );
};
