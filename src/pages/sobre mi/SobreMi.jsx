import { Image } from "react-bootstrap";
import "./SobreMi.css";
import Servicios from "./servicios/Servicios.jsx";
import HistorialDeConfianza from "./historial de confianza/HistorialDeConfianza";

const SobreMi = () => {
  return (
    <div className="sobreMi">
      <Image />
      <h2 className="text">
        Me llamo Nicolás Beresvil, soy Ingeniero Industrial y Especialista en
        Higiene y Seguridad Laboral, graduado de la UTN Facultad Regional Santa
        Fe y matriculado en el Colegio de Ingenieros Especialistas de la
        Provincia Santa Fe – Conf. Ley 11.291. Con experiencia en el sector
        industrial, creé NB Soluciones, una empresa especializada en servicios
        de ingeniería y seguridad laboral.
      </h2>
      <h1 className="title">Objetivos</h1>
      <h2 className="text">
        Me dedico a identificar, evaluar y controlar riesgos laborales,
        optimizando procesos para aumentar la eficiencia y reducir
        siniestralidad. Me aseguro de que mis clientes cumplan con la
        legislación vigente para garantizar altos estándares de seguridad en sus
        entornos laborales
      </h2>
      <Servicios />
      <HistorialDeConfianza />
    </div>
  );
};

export default SobreMi;
