import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Typography() {
  const mystyle = {
    backgroundColor:"#DDA0DD"
  };
  return (
    <>
      <div className="section" style = {mystyle}>
        <Container>
          
          <div className="space-50"></div>
          <div id="images">
            <h2><b>Our Team</b></h2>
            <Row>
            <Col sm="4">
            
                <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/shadab.jpeg").default}
                ></img>
                <h5><b>Mohd. Shadaab</b></h5>
              </Col>
              <Col sm="4">
                <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/khushi.jpeg").default}
                ></img>
                <h5><b>Khushi Dubey</b></h5>
              </Col>
              <Col sm="4">
                <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/ritika.jpeg").default}
                ></img>
                <h5><b>Ritika Subuddhi</b></h5>
              </Col>
              
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Typography;

