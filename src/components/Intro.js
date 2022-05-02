import { Container, Col, Row, Button } from "react-bootstrap";
import Typed from "react-typed";

const Intro = () => {
    return (
        <div id="profil">
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <Col xs={12} className="d-flex justify-content-center __name-heading-opacity">
                            <h1 className="heading-opacity text-center d-none d-md-block d-lg-block">
                                EGIERDIAN
                            </h1>
                        </Col>
                        <h1 className="text-center __name-heading">EGIERDIAN </h1>
                        <p className="text-center imProfession">
                            I 'm <span>
                            <Typed
                                strings={[' Web Developer',' Junior Programmer']}
                                typeSpeed={50}
                                loop
                            /> 
                            </span>
                        </p>
                        {/* media */}
                        <Col xs={12} className="text-center pt-5">
                              <a className="btn btn-lg btnMedia" href="https://github.com/egierdian"><div
                                  className="fa fa-github" aria-hidden="true"></div></a>
                              <a className="btn btn-lg"
                              href="https://www.linkedin.com/in/egi-erdian-21a35a196/"><i className="fa fa-linkedin"
                                  aria-hidden="true"></i></a>
                              <a className="btn btn-lg" href="https://fb.com/egi3rdian"><i
                                  className="fa fa-facebook" aria-hidden="true"></i></a>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

{
    /* <div>
                  <section id="profil">
                      <div className="container">
                      <div className="row">
                          <div className="col-12">
                          <div className="col-12 d-flex justify-content-center" style="position: absolute; margin-top: -7vw; opacity: 0.3">
                              <h1 className="heading-opacity text-center d-none d-md-block d-lg-block">
                              EGIERDIAN
                              </h1>
                          </div>
                          <h1 className="text-center" style="
                                  color: #214151;
                                  font-size: 3em;
                                  font-weight: 700;
                                  letter-spacing: 7px;
                              ">
                              EGIERDIAN
                          </h1>
                          <p className="text-center" style="color: #214151; font-size: 1.5rem; margin-top: -5px">
                              I'm <span id="typed"></span>
                          </p>
                          <div className="col-12 text-center">
                              <a className="btn btn-lg" style="padding: 0 15px; color: #214151" href="https://github.com/egierdian"><i
                                  className="fa fa-github" aria-hidden="true"></i></a>
                              <a className="btn btn-lg" style="padding: 0 15px; color: #214151"
                              href="https://www.linkedin.com/in/egi-erdian-21a35a196/"><i className="fa fa-linkedin"
                                  aria-hidden="true"></i></a>
                              <a className="btn btn-lg" style="padding: 0 15px; color: #214151" href="https://fb.com/egi3rdian"><i
                                  className="fa fa-facebook" aria-hidden="true"></i></a>
                          </div>
                          </div>
                      </div>
                      </div>
                  </section>
              </div> */
}
export default Intro;
