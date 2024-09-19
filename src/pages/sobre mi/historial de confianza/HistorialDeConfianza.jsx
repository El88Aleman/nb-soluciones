import { Image } from "react-bootstrap";
import "./HistorialDeConfianza.css";
import UseIntersecting from "../../../components/useIntersecting/UseIntersecting";
import { historiales } from "./historialDeConfianza.js";

const HistorialDeConfianza = () => {
  const [elementoRef5, isIntersecting5] = UseIntersecting({
    threshold: 0.5,
  });

  return (
    <div className="historialDeConfianza">
      <div className="contenedorTitle" ref={elementoRef5}>
        {isIntersecting5 && <p className="title">Historial De Confianza</p>}
      </div>
      <div className="images">
        <div className="slider" style={{ "--quantity": 12 }}>
          {historiales.map((historial) => (
            <div
              key={historial.id}
              className="item"
              style={{ "--position": historial.position }}
            >
              <Image
                src={historial.src}
                height={historial.height}
                width={historial.width}
                className="img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistorialDeConfianza;
