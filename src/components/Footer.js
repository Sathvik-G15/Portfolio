import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright by Sathvik. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
