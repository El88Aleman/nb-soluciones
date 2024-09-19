import { servicios } from "./serviciosIngenieria.js";
import "../../components/global/global.css";
import UseIntersecting from "../../components/useIntersecting/UseIntersecting.jsx";

const Ingenieria = () => {
  const [elementoRef3, isIntersecting3] = UseIntersecting({
    threshold: 0.5,
  });
  return (
    <div>
      <div className="contenedorTitle" ref={elementoRef3}>
        {isIntersecting3 && <p className="title">Ingenieria</p>}
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

export default Ingenieria;
