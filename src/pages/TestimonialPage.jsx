import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";
import { testimonial } from "../data/index";

const TestimonialPage = () => {
  return (
    <div className="box">
      <div className="testimonialPage">
        <Container>
          <Row className="mb-5">
            <Col>
              <h1 className="text-center fw-bold">Semua Testimoni</h1>
              <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, asperiores.</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
            {testimonial.map((data) => {
              return (
                <Col key={data.id} className="mb-4">
                  {/* Hanya ini yang bisa gw lakukan ngab */}
                  <div className="shadow rounded">
                    <p className="desc">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="" />
                      <div>
                        <h5 className="my-1 fw-bold text-start">{data.name}</h5>
                        <p className="m-0 fw-bold opacity-50">{data.skill}</p>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <FaqComponent className=""/>
    </div>
  );
};

export default TestimonialPage;
