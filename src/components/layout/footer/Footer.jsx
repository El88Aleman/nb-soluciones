import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { motion } from "framer-motion";
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
        <motion.img
          src="../../src/assets/fotos/nbSoluciones.png"
          className="logoImg"
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
      </div>
      <div className="logoMio">
        <img
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1725313619/igoxccnkwjgxloo0nqra.png"
          className="logoMioImg"
        />
      </div>
      <Link className="flecha" onClick={scrollToTop}>
        <FaArrowUp className="iconFlecha" />
      </Link>
    </div>
  );
};

export default Footer;
