import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";

import { kelasTerbaru, dataSwiper } from "../data/index";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required swiper modules
import { Pagination } from "swiper/modules";

// Import FAQ Page
import FaqComponent from "../components/FaqComponent";

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className="homepage">
      {/* Header */}
      <header className="akama w-100 min-vh-100">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-3 animate__animated">
                Temukan <br /> <span>Bakat Kreatifmu</span> <br />
                Bersama Kami!
              </h1>
              <p className="mb-3 animate__animated animate__fadeInDown">Dengan berbagai video pembelajaran kamu sudah bisa mempelajari banyak hal hanya dengan modal Nol Rupiah</p>
              <button
                className="btn btn-danger btn-lg rounded-1 me-3 animate__animated animate__fadeInUp"
                onClick={() => {
                  navigate("/kelas");
                }}
              >
                Lihat Kelas
              </button>
              <button className="btn btn-outline-danger btn-lg rounded-1 animate__animated animate__fadeInUp" onClick={() => alert("Fitur ini belum tersedia")}>
                Tech Stack
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              {" "}
              {/*Ternyata bisa begini juga lek 1:24:49*/}
              <img src={HeroImage} alt="chawnima" className="animate__animated animate__fadeInUp" />
            </Col>
          </Row>
        </Container>
      </header>
      {/* Header */}

      {/* Kelas */}
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center">Kelas Terbaru</h1>
              <p className="text-center">Berikut ini adalah video terbaru di platform kami yang bisa kamu akses.</p>
            </Col>
          </Row>
          <Row>
            {/* Pake JS Module untuk ekspor url youtube */}
            {kelasTerbaru.map((kelas) => {
              return (
                <Col key={kelas.id} className="rounded" data-aos="fade-up" data-aos-duration="2000">
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
                      {kelas.buy}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="text-center">
              <button
                className="btn btn-success rounded-5 btn-lg"
                onClick={() => {
                  navigate("/kelas");
                }}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Lihat Semua Kelas <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Kelas */}

      {/* Testimonial */}
      <div className="testimonial">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold mb-5">Testimonial</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((swip) => {
                return (
                  <SwiperSlide key={swip.id} className="shadow rounded">
                    <p className="desc">{swip.desc}</p>
                    <div className="people">
                      <img src={swip.image} alt="" />
                      <div>
                        <h5 className="my-1 fw-bold text-start">{swip.name}</h5>
                        <p className="m-0 opacity-50 fw-bold">{swip.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* <SwiperSlide>Slide 1</SwiperSlide> */}
            </Swiper>
          </Row>
        </Container>
      </div>
      {/* Testimonial */}

      {/* FAQ */}
      <FaqComponent />
      {/* FAQ */}
    </div>
  );
};

export default HomePage;
