import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// import Image from "../assets/img/kelas/kelas-1.jpg";
// import { semuaKelas } from "../data";
import KelasImage from "../assets/img/kelas/kelas-1.jpg";

import { kelasTerbaru } from "../data";
import { Link } from "react-router-dom";

const VideoPage = () => {
  // Sebelum masuk ke pembelajaran
  const youtubeUrl = localStorage.getItem("url");
  const courseTitle = localStorage.getItem("title");
  // console.log(apaanlah); // WOOOOOOO, BISA REK
  return (
    <div className="videoPage">
      <Container className="w-100 min-vh-100">
        <Row className="mx-auto">
          <Col className="col-lg-8 col-md-12 col-sm-12 col-12">
            <Row>
              <Col className="col-lg-12 col-md-12 col-sm-12 ratio ratio-16x9">
                <iframe src={youtubeUrl} title="YouTube video player" frameborder="0" className="rounded" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </Col>
              <Col className="col-lg-12 col-md-12 col-sm-12 py-3">
                <p className="fs-4 lh-sm p-0">{courseTitle}</p>
              </Col>
              <Col className="col-lg-12 col-md-12 col-sm-12">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dolore provident dicta? Assumenda consequuntur aliquam voluptate alias, asperiores accusantium nam, eos quidem soluta sint quod accusamus numquam laborum
                  saepe vero.
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="col-lg-4 col-md-12 col-sm-12 col-12">
            <Card className="w-100 h-100">
              <Card.Body>
                <p>
                  <strong className="fs-5">Kelas Lainnya</strong>
                </p>
                <div className="anotherVideo">
                  {kelasTerbaru.map((anotherVideo) => {
                    return (
                      <div className="card w-100 mb-3 overflow-x-hidden" style={{ "max-width": "540px" }}>
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img src={anotherVideo.image} className="img-fluid h-100 rounded-start" alt="..." />
                          </div>
                          <div className="col-md-8 px-2">
                            <div className="card-body py-auto px-0">
                              <Link
                                onClick={() => {
                                  const dataUrl = anotherVideo.url;
                                  const dataTitle = anotherVideo.title;

                                  localStorage.setItem("url", dataUrl);
                                  localStorage.setItem("title", dataTitle);
                                  Navigate("/videopage");
                                }}
                                className="card-title fw-bold d-flex align-item-center"
                              >
                                {anotherVideo.title}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VideoPage;
