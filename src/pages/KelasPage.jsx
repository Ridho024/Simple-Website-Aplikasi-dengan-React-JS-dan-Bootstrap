import React from "react";

import { semuaKelas } from "../data/index";
import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";

import { useNavigate } from "react-router-dom";

const KelasPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="kelasPage w-100 min-vh-100">
        <Container>
          <Row className="m-5">
            <Col>
              <h1 className="text-center fw-bold">Semua Kelas</h1>
              <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row>
            {semuaKelas.map((kelas) => {
              return (
                <Col key={kelas.id} className="rounded ">
                  <img src={kelas.image} alt="ridhz.com" className="w-100 rounded-top mb-5" />
                  <div className="mb-3 star px-3">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3">{kelas.title}</h5>
                  <div className="d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="text-primary fw-bold m-0">{kelas.price}</p>
                    <button
                      className="btn btn-danger rounded-1"
                      onClick={() => {
                        const dataUrl = kelas.url;
                        const dataTitle = kelas.title;

                        localStorage.setItem("url", dataUrl);
                        localStorage.setItem("title", dataTitle);
                        navigate("/videopage");
                      }}
                    >
                      {" "}
                      {kelas.buy}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <FaqComponent />
    </div>
  );
};

export default KelasPage;
