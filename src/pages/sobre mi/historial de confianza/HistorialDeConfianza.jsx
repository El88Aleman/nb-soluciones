import { Image } from "react-bootstrap";
import "./HistorialDeConfianza.css";
import UseIntersecting from "../../../components/useIntersecting/UseIntersecting";
import { motion } from "framer-motion";
import { historiales } from "./historialDeConfianza.js";

const HistorialDeConfianza = () => {
  const [elementoRef5, isIntersecting5] = UseIntersecting({
    threshold: 0.5,
  });

  return (
    <div>
      <div ref={elementoRef5} className="title">
        {isIntersecting5 && (
          <motion.h1
            className="title"
            initial={{ x: "-200vh" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
          >
            Historial De Confianza
          </motion.h1>
        )}
      </div>
      <div className="images">
        {historiales.map((historial) => (
          <Image
            key={historial.id}
            src={historial.src}
            height={historial.height}
            width={historial.width}
            data-aos={historial.dataAos}
          />
        ))}
      </div>
    </div>
  );
};

export default HistorialDeConfianza;
