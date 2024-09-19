import { Button, Form } from "react-bootstrap";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Contactos.css";
import { useNavigate } from "react-router-dom";
import UseIntersecting from "../../components/useIntersecting/UseIntersecting";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contactos = () => {
  const [elementoRef6, isIntersecting6] = UseIntersecting({
    threshold: 0.5,
  });
  const [messageSent, setMessageSent] = useState(false);
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICES,
        import.meta.env.VITE_EMAIL_TEMPLATES,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setMessageSent(true);
          setTimeout(() => {
            navigate("/");
          }, 4000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      {messageSent ? (
        <p className="mensajeAprobado">
          Mensaje enviado con éxito &#127881; &#127881; &#127881;
        </p>
      ) : (
        <>
          <Form className="form" ref={form} onSubmit={sendEmail}>
            <Form.Group
              className="labelTitle"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Email de usted</Form.Label>
              <Form.Control
                className="labelText"
                type="email"
                placeholder="*******@gmail.com"
                name="user_email"
              />
            </Form.Group>
            <Form.Group
              className="labelTitle"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Asunto</Form.Label>
              <Form.Control
                className="labelText"
                type="text"
                placeholder="Escriba aqui el asunto.."
                name="user_name"
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
              <Form.Control
                className="labelText"
                as="textarea"
                rows={3}
                name="message"
              />
            </Form.Group>
            <Button
              className="button"
              variant="info"
              type="submit"
              value="Send"
            >
              Enviar
            </Button>
          </Form>
          <div className="iconos" ref={elementoRef6}>
            {isIntersecting6 && (
              <div className="iconos">
                <a href="tel:+3425456890" target="_blank" className="icon">
                  <FaPhoneAlt className="phone" size={60} />
                </a>
                <a
                  href="https://wa.me/3425456890"
                  target="_blank"
                  className="icon"
                >
                  <FaWhatsapp className="whatsapp" size={60} />
                </a>
                <a
                  href="https://www.instagram.com/ing.nicolasberesvil"
                  target="_blank"
                  className="icon"
                >
                  <FaInstagram className="ig" size={60} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nicol%C3%A1s-beresvil-682a89b0/"
                  target="_blank"
                  className="icon"
                >
                  <FaLinkedin className="linkedin" size={60} />
                </a>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Contactos;
