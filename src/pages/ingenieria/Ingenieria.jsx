import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { servicios } from "./serviciosIngenieria.js";
import "../../components/global/global.css";

const Ingenieria = () => {
  const [selectedId, setSelectedId] = useState(null);

  const selectedItem = servicios.find((servicio) => servicio.id === selectedId);
  return (
    <div>
      <h1 className="titleService">Ingenieria</h1>
      <div className="listServices">
        {servicios.map((servicio) => (
          <motion.div
            key={servicio.id}
            layoutId={servicio.id}
            onClick={() => setSelectedId(servicio.id)}
            className="service-item"
            style={{ cursor: "pointer", marginBottom: "10px" }}
          >
            <motion.h2 style={{ fontFamily: "MontserratTitle" }}>
              {servicio.title}
            </motion.h2>
            <motion.h5 style={{ fontFamily: "MontserratText" }}>
              {servicio.subtitle}
            </motion.h5>
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedId && selectedItem && (
            <motion.div layoutId={selectedId} className="service-details">
              <motion.h2 style={{ fontFamily: "MontserratTitle" }}>
                {selectedItem.title}
              </motion.h2>
              <motion.h5 style={{ fontFamily: "MontserratText" }}>
                {selectedItem.subtitle}
              </motion.h5>
              <motion.button
                onClick={() => setSelectedId(null)}
                className="close-button"
              >
                Cerrar
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Ingenieria;
