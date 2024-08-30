import "./Navbar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navBar">
      <Link to="/">
        <motion.img
          src="../../src/assets/fotos/nbSoluciones.png"
          heigth="200px"
          width="200px"
          className="image"
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
        <div className="text"></div>
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
    </div>
  );
};

export default Navbar;
