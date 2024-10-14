import "./NavBar.css";
import { Link } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  NavbarToggle,
  Offcanvas,
} from "react-bootstrap";
import { useEffect, useState } from "react";

const NavBar = () => {
  const expand = false;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="navBar">
      {isMobile ? (
        <Navbar
          expand={expand}
          className="bg-body-tertiary mb-3 custom-navbar "
          style={{
            padding: "0px",
            margin: "0px",
            width: "100%",
            height: "auto",
          }}
        >
          <Container
            fluid
            className="navBarMobile"
            style={{
              backgroundColor: "rgb(235, 235, 235)",
              top: "0",
              left: "0",
              right: "0",
            }}
          >
            <Link to="/">
              <Navbar.Brand href="#">
                <img
                  src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1728508017/Nb%20Soluciones/id3liuuryp1vbyeqm2tr.png"
                  className="logoNb"
                />
              </Navbar.Brand>
            </Link>
            <NavbarToggle
              style={{
                backgroundColor: "white",
                color: "white",
                border: "0",
              }}
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{
                maxWidth: "40%", // Define la anchura máxima del Offcanvas
                width: "40%", // Define la anchura actual del Offcanvas
              }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Link to="/">
                    <img
                      src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1728508017/Nb%20Soluciones/id3liuuryp1vbyeqm2tr.png"
                      className="logoNbMenu"
                    />
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/" className="navLink">
                    Sobre Mi
                  </Link>
                  <Link to="/higieneYseguridad" className="navLink">
                    Servicios Higiene y Seguridad
                  </Link>
                  <Link to="/ingenieria" className="navLink">
                    Servicios Ingenieria
                  </Link>
                  <Link to="/confianEnNosotros" className="navLink">
                    Confian en Nosotros
                  </Link>
                  <Link to="/contactos" className="navLink">
                    Contactos
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ) : (
        <>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1728508017/Nb%20Soluciones/id3liuuryp1vbyeqm2tr.png"
              className="logoNb"
            />
          </Link>
          <ul className="menu">
            <Link to="/" className="itemMenu">
              Sobre Mi
            </Link>
            <Link to="/higieneYseguridad" className="itemMenu">
              Servicios Higiene y Seguridad
            </Link>
            <Link to="/ingenieria" className="itemMenu">
              Servicios Ingenieria
            </Link>
            <Link to="/confianEnNosotros" className="itemMenu">
              Confian en Nosotros
            </Link>
            <Link to="/contactos" className="itemMenu">
              Contactos
            </Link>
          </ul>
        </>
      )}
    </div>
  );
};

export default NavBar;
