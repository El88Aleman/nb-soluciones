import { Image } from "react-bootstrap";
import "./ProyectosRealizados.css";
import { proyectos } from "./proyectosRealizados.js";
import UseIntersecting from "../../components/useIntersecting/UseIntersecting";
import "./ProyectosRealizados.css";
const ProyectosRealizados = () => {
  const [elementoRef7, isIntersecting7] = UseIntersecting({
    threshold: 0.5,
  });
  return (
    <div className="proyectosRealizados">
      <div
        style={{ marginBottom: "100px", marginTop: "30px" }}
        ref={elementoRef7}
      >
        {isIntersecting7 && <p className="title">Proyectos Realizados</p>}
      </div>
      {proyectos.map((proyecto) => (
        <div key={proyecto.id} className="containerProyect">
          <div className="containerImage" style={{ "--quantity": 12 }}>
            <Image
              src={proyecto.src}
              height={proyecto.height}
              width={proyecto.width}
              style={{ "--position": proyecto.position }}
              className="imgProyect"
            />
          </div>
          <p className="containerText">{proyecto.texto}</p>
        </div>
      ))}
    </div>
  );
};

export default ProyectosRealizados;
