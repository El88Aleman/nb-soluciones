import "./NavBar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
                <motion.img
                  src="../../src/assets/fotos/nbSoluciones.png"
                  className="logoNb"
                  whileInView={{
                    scale: [0.5, 1, 0.5, 0.5, 1, 1],
                    rotate: [0, 0, 180, 180, 180, 0],
                    borderRadius: ["50%", "0%", "50%", "0%", "50%"],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeatDelay: 1,
                  }}
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
                    <motion.img
                      src="../../src/assets/fotos/nbSoluciones.png"
                      className="logoNbMenu"
                      whileInView={{
                        scale: [0.5, 1, 0.5, 0.5, 1, 1],
                        rotate: [0, 0, 180, 180, 180, 0],
                        borderRadius: ["50%", "0%", "50%", "0%", "50%"],
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeatDelay: 1,
                      }}
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
                  <Link to="/proyectosRealizados" className="navLink">
                    Proyectos Realizados
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
            <motion.img
              src="../../src/assets/fotos/nbSoluciones.png"
              className="logoNb"
              whileInView={{
                scale: [0.5, 1, 0.5, 0.5, 1, 1],
                rotate: [0, 0, 180, 180, 180, 0],
                borderRadius: ["50%", "0%", "50%", "0%", "50%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeatDelay: 1,
              }}
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
            <Link to="/proyectosRealizados" className="itemMenu">
              Proyectos Realizados
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
