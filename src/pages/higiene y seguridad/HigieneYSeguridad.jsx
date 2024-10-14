import { servicios } from "./serviciosHigiene.js";
import "../../components/global/global.css";

const HigieneYSeguridad = () => {
  return (
    <div>
      <div className="contenedorTitle">
        <p className="title">Higiene y Seguridad</p>
      </div>

      <div className="listServices">
        {servicios.map((servicio) => (
          <div key={servicio.id} className="service-item">
            <p className="cardTitle">{servicio.title}</p>
            <p className="cardText">{servicio.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HigieneYSeguridad;
