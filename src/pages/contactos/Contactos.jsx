import { Button, Form } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Contactos.css";
import { Link } from "react-router-dom";

const Contactos = () => {
  return (
    <div>
      <Form className="form">
        <Form.Group
          className="labelTitle"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Email de usted</Form.Label>
          <Form.Control
            className="labelText"
            type="email"
            placeholder="*******@gmail.com"
          />
        </Form.Group>
        <Form.Group
          className="labelTitle"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Asunto</Form.Label>
          <Form.Control
            className="labelText"
            type="email"
            placeholder="Escriba aqui el asunto.."
          />
        </Form.Group>
        <Form.Group
          className="labelTitle"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>
            Exprese aquí lo que desea comunicarle a Nicolas Berevil para ser
            contactado
          </Form.Label>
          <Form.Control className="labelText" as="textarea" rows={3} />
        </Form.Group>
        <Button className="button" variant="info">
          Enviar
        </Button>
      </Form>
      <div className="iconos">
        <Link className="icon">
          <FaPhoneAlt size={30} />
          <h4 style={{ margin: "10px" }}>(342) 5456890</h4>
        </Link>
        <Link className="icon">
          <FaInstagram size={35} />
          <h4 style={{ margin: "10px" }}>ing.nicolasberesvil</h4>
        </Link>
        <Link className="icon">
          <FaLinkedin size={35} />
          <h4 style={{ margin: "10px" }}>www.linkedin.com/nicolasberesvil</h4>
        </Link>
      </div>
    </div>
  );
};

export default Contactos;
