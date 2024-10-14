import { Image } from "react-bootstrap";
import "./HistorialDeConfianza.css";
import { historiales } from "./historialDeConfianza.js";

const HistorialDeConfianza = () => {
  return (
    <div className="historialDeConfianza">
      <div className="contenedorTitle">
        <p className="title">Confian en nosotros</p>
      </div>
      <div className="images">
        <div className="slider" style={{ "--quantity": 14 }}>
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
