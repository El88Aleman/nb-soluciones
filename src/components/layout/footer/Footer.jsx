import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Footer.css";
import LogoFyB from "../../../assets/fotos/LogoFyB";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footer">
      <div>
        <Link to="/Contactos" className="contacto">
          <FaAddressBook size={40} className="icono" />
          Contactos
        </Link>
      </div>
      <div className="logo">
        <motion.img
          src="../../src/assets/fotos/nbSoluciones.png"
          heigth="100px"
          width="100px"
          className="image"
          whileInView={{
            scale: [1, 1.5, 1, 1, 1.5, 1],
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
        <p className="titulo">
          <strong>Soluciones</strong> en Ingenieria e Higiene y Seguridad{" "}
        </p>
        <div className="logoMio">
          <LogoFyB />
        </div>
      </div>
      <Link className="flecha" onClick={scrollToTop}>
        <FaArrowUp size={35} />
      </Link>
    </div>
  );
};

export default Footer;
