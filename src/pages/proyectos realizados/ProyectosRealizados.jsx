import { Image } from "react-bootstrap";
import "./ProyectosRealizados.css";
import { proyectos } from "./proyectosRealizados.js";
import { motion } from "framer-motion";
import UseIntersecting from "../../components/useIntersecting/UseIntersecting";
import "./ProyectosRealizados.css";
const ProyectosRealizados = () => {
  const [elementoRef7, isIntersecting7] = UseIntersecting({
    threshold: 0.5,
  });
  return (
    <div className="proyectosRealizados">
      <div ref={elementoRef7}>
        {isIntersecting7 && (
          <motion.h1
            className="title"
            initial={{ x: "-200vh" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
          >
            Proyectos Realizados
          </motion.h1>
        )}
      </div>
      {proyectos.map((proyecto) => (
        <div key={proyecto.id} className="caja">
          <Image
            src={proyecto.src}
            height={proyecto.height}
            width={proyecto.width}
            className="img"
          />
          <h3 style={{ fontFamily: "MontserratText", margin: "5px" }}>
            {proyecto.texto}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ProyectosRealizados;
