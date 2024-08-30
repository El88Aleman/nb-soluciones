import "./SobreMi.css";
import Servicios from "./servicios/Servicios.jsx";
import HistorialDeConfianza from "./historial de confianza/HistorialDeConfianza.jsx";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import UseIntersecting from "../../components/useIntersecting/UseIntersecting.jsx";
import { Col, Image } from "react-bootstrap";

const SobreMi = () => {
  const [elementoRef, isIntersecting] = UseIntersecting({
    threshold: 0.5,
  });

  return (
    <div className="sobreMi">
      <Col
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="400"
        data-aos-offset="0"
        className="image"
      >
        <Image
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1724883523/Nb%20Soluciones/jy7hvcld2bjtjn3139lq.png"
          width="300px"
          height="350px"
          roundedCircle
        />
      </Col>
      <div className="text">
        <Typewriter
          words={[
            "Me llamo Nicolás Beresvil, soy Ingeniero Industrial y Especialista en Higiene y Seguridad Laboral, graduado de la UTN Facultad Regional Santa Fe y matriculado en el Colegio de Ingenieros Especialistas de la Provincia Santa Fe – Conf. Ley 11.291. Con experiencia en el sector industrial, creé NB Soluciones, una empresa especializada en servicios de ingeniería y seguridad laboral.",
          ]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={20}
          deleteSpeed={50}
          delaySpeed={3000}
        />
      </div>
      <div ref={elementoRef}>
        {isIntersecting && (
          <motion.h1
            className="title"
            initial={{ x: "-200vh" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
          >
            Objetivos
          </motion.h1>
        )}
      </div>
      <div className="text">
        <Typewriter
          words={[
            "Me dedico a identificar, evaluar y controlar riesgos laborales, optimizando procesos para aumentar la eficiencia y reducir siniestralidad. Me aseguro de que mis clientes cumplan con la legislación vigente para garantizar altos estándares de seguridad en sus entornos laborales.",
          ]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={20}
          deleteSpeed={50}
          delaySpeed={3000}
        />
      </div>
      <Servicios />
      <HistorialDeConfianza />
    </div>
  );
};

export default SobreMi;
