import { servicios } from "./serviciosHigiene.js";
import "../../components/global/global.css";
import UseIntersecting from "../../components/useIntersecting/UseIntersecting.jsx";

const HigieneYSeguridad = () => {
  const [elementoRef4, isIntersecting4] = UseIntersecting({
    threshold: 0.5,
  });
  return (
    <div>
      <div className="contenedorTitle" ref={elementoRef4}>
        {isIntersecting4 && <p className="title">Higiene y Seguridad</p>}
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

export default HigieneYSeguridad;
