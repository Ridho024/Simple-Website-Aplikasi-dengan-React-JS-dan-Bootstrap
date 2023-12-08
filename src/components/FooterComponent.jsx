import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer pt-5">
      <Container>
        <Row> {/* Kalo mau pake d-flex justify content space between bootstrap column nya juga harus diatur */}
          <Col lg="6">
            <h3 className="fw-bold">RIDHZ</h3>
            <p className="desc">Platform belajar online gratis dengan berbagai materi dan video pembelajaran yang mudah dipahami oleh pemula</p>
            <div className="no mt-4 mb-1">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 666-666-666</p>
              </Link>
            </div>
            <div className="email">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope "></i>
                <p className="m-0">ridhoramadhan@ridhz.cloud.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 mt-lg-0 mt-4">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="kelas">Kelas</Link>
            <Link to="testimonial">Testimonial</Link>
            <Link to="faq">FAQ</Link>
            <Link to="syaratketentuan">Syarat & Ketentuan</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-4">
            <h5 className="fw-bold mb-3">Subscribe untuk informasi terbaru</h5>
            <div className="subscribe">
              <input type="text" placeholder="Ex: person@gmail.com" />
              <button className="btn btn-danger rounded-end rounded-0">Subscribe</button>
            </div>
            <div className="social mt-4">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
           <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">Muhammad Ridho Ramadhan</span> || All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
