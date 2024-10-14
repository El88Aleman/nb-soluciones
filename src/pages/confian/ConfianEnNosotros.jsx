import "./ConfianEnNosotros.css";
import proyectoPdf from "../../assets/proyectos/ConfianEnNosotros.pdf";
import "../../components/global/global.css";
import HistorialDeConfianza from "../sobre mi/historial de confianza/HistorialDeConfianza.jsx";

const ConfianEnNosotros = () => {
  const handleClickProyecto = () => {
    window.open(proyectoPdf, "_blank");
  };
  return (
    <div className="proyectosRealizados">
      <HistorialDeConfianza />
      <div>
        <div className="buttonProyect">
          <p className="cardText">
            Haz click para ver información mas detallada sobre nuestros trabajos
            en las diferentes empresas
          </p>
          <a className="cv" onClick={handleClickProyecto}>
            <span id="span1"></span>
            <span id="span2"></span>
            VER DETALLE
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConfianEnNosotros;
