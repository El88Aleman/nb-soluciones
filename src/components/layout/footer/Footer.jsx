import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footer">
      <div>
        <Link to="/Contactos" className="containerContacto">
          <FaAddressBook className="iconContacto" />
          <p className="contacto">Contactos</p>
        </Link>
      </div>
      <div className="logo">
        <img
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1728508017/Nb%20Soluciones/id3liuuryp1vbyeqm2tr.png"
          className="logoImg"
        />
        <p className="titulo">
          <strong>Soluciones</strong> en Ingenieria e Higiene y Seguridad
        </p>
      </div>
      <Link className="flecha" onClick={scrollToTop}>
        <FaArrowUp className="iconFlecha" />
      </Link>
    </div>
  );
};

export default Footer;
