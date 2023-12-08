// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index"; // Index js disini bertindak sebagai API yang menerima lalu mengirimkan data ke front end
// Skemanya begini index ke navbar lalu menjadi pramater atau kayak props gitu lah intinya
// nama importnya sesuai dengan nama yang diekspor oleh index.js liat aja

import { NavLink } from "react-router-dom"; // Digunakan untuk me link ke page halaman
// Coba perhatikan hasil hoveran NavLink

const NavbarComponent = () => {
  const [changeColor, setColor] = useState(false);

  const changeNavbarBackground = () => {
    if (window.scrollY > 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    changeNavbarBackground();

    window.addEventListener("scroll", changeNavbarBackground);
  });

  const responSite = () => {
    const navbar = document.getElementsByClassName("navbar");
    alert("Percobaan Berhasil");
  };

  return (
    <Navbar expand="lg" className={changeColor ? "fixed-top p-2 change" : "fixed-top"}>
      <Container>
        <Navbar.Brand href="#home" className="fs-3 fw-bold">
          RIDHZ
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            {" "}
            {/* mx => margin x = auto */}
            {navLinks.map((linkName) => {
              // map function digunakan untuk melakukan filterisasi dan perulangan pada array
              return (
                // Karena di index js yang diekspor adalah array maka bisa dilakukan mappping
                <div className="nav-link" key={linkName.id}>
                  <NavLink to={linkName.path} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end>
                    {linkName.text}
                  </NavLink>
                  {/* className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""} */}
                </div>
              );
            })}
          </Nav>
          <div className="text-center">
            {/* <Button variant="outline-danger">Danger</Button> */}
            <button className="btn btn-outline-danger rounded-1 join" onClick={() => alert("Fitur ini belum tersedia")}>
              Join With Us
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
