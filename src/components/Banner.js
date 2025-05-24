import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Header-img.png";
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              <div >
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>Hi! I'm Sathvik </h1>
                  <p>I’m a passionate Web Developer with a strong foundation in the MERN stack and modern web technologies. From building real-time platforms like an E-Bidding System to creating healthcare solutions like Medico, I specialize in developing responsive, user-focused web applications that solve real-world problems.</p>
              </div>
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
                <div>
                  <img src={headerImg} alt="Header Img"/>
                </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
