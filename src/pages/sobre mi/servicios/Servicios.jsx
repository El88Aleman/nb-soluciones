import { servicios } from "./servicios.js";
import "../../../components/global/global.css";
import UseIntersecting from "../../../components/useIntersecting/UseIntersecting.jsx";
const Servicios = () => {
  const [elementoRef2, isIntersecting2] = UseIntersecting({
    threshold: 0.5,
  });
  return (
    <div>
      <div className="contenedorTitle" ref={elementoRef2}>
        {isIntersecting2 && (
          <p className="title">¿Porque elegir mis servicios?</p>
        )}
      </div>
      <div className="listServices">
        {servicios.map((servicio) => (
          <div key={servicio.id} className="service-item">
            <p style={{ fontSize: "32px" }}>{servicio.title}</p>
            <p style={{ fontSize: "22px" }}>{servicio.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
