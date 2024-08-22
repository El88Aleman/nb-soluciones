import { Image } from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navBar">
      <Link to="/">
        <Image
          src="../../src/assets/fotos/nbSoluciones.png"
          height="200px"
          width="200px"
          style={{ margin: "20px" }}
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
    </div>
  );
};

export default Navbar;
