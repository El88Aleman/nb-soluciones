import { motion } from "framer-motion";
import { servicios } from "./serviciosHigiene.js";
import "../../components/global/global.css";
import UseIntersecting from "../../components/useIntersecting/UseIntersecting.jsx";

const HigieneYSeguridad = () => {
  const [elementoRef4, isIntersecting4] = UseIntersecting({
    threshold: 0.5,
  });
  return (
    <div>
      <div ref={elementoRef4}>
        {isIntersecting4 && (
          <motion.h1
            className="titleService"
            initial={{ x: "-200vh" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
          >
            Higiene y Seguridad
          </motion.h1>
        )}
      </div>
      {servicios.map((servicio) => (
        <div key={servicio.id} className="listServices">
          <motion.div layoutId={servicio.id} className="service-item">
            <motion.h2>{servicio.title}</motion.h2>
            <motion.h5>{servicio.subtitle}</motion.h5>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default HigieneYSeguridad;
