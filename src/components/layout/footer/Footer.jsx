import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { Image } from "react-bootstrap";
import { FaAddressBook } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footer">
      <div>
        <Link to="/Contactos" className="contacto">
          <FaAddressBook size={30} className="icono" />
          Contactos
        </Link>
      </div>
      <div className="logo">
        <Image
          src="../../../src/assets/fotos/nbSoluciones.png"
          height="100px"
          width="100px"
        />
        <h5 className="titulo">
          <strong>Soluciones</strong> en Ingenieria e Higiene y Seguridad{" "}
        </h5>
      </div>
      <Link className="flecha" onClick={scrollToTop}>
        <FaArrowUp size={25} />
      </Link>
    </div>
  );
};

export default Footer;
