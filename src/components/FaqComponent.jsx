import React from "react";

// import faq from '../data/index'
import { faq } from "../data/index";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const FaqComponent = () => {
  return (
    <div className="faq">
      <Container>
        <Row className="mx-auto">
          <Col>
            {
              // Gak bisa lagsung paggil faq haiiya karena kalau faq langsung yang dikembalikan bakalan array semua o jadi nggak bisa langsung faq.apalah
              // pakai {} ini saja haiya untuk mengekstrak objek dari dalam array o
              // faq.map((test) => {
              //   return <h2>{test[gitu ya rek]}</h2>
              // })
            }
            <h2 className="text-center fw-bold mb-5">Pertanyaan yang paling sering ditanyakan</h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 mx-auto row-cols-1 g-4">
          {" "}
          {/* Ini baru oo, kalo nggak ikut ini oe mana paham cipalipampam */}
          {faq.map((data) => {
            return (
              <Col>
                <Accordion key={data.id}>
                  <Accordion.Item eventKey={data.eventKey} className="shadow-sm">
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body className="bordered-1">{data.desc}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default FaqComponent;
