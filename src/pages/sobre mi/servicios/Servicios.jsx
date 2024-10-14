import { servicios } from "./servicios.js";
import "../../../components/global/global.css";

const Servicios = () => {
  return (
    <div>
      <div className="contenedorTitle">
        <p className="title">¿Porque elegir mis servicios?</p>
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

export default Servicios;
