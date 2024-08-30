import { Button, Form } from "react-bootstrap";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Contactos.css";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
  const handlePhoneClick = (event) => {
    event.preventDefault();
    window.open("tel:+3425456890", "_blank");
  };
  const handleWhatsAppClick = (event) => {
    event.preventDefault();
    window.open("https://wa.me/3425456890", "_blank");
  };
  const handleInstagramClick = (event) => {
    event.preventDefault();
    window.open("https://www.instagram.com/ing.nicolasberesvil", "_blank");
  };
  const handleLinkedInClick = (event) => {
    event.preventDefault();
    window.open(
      "https://www.linkedin.com/in/nicol%C3%A1s-beresvil-682a89b0/",
      "_blank"
    );
  };
  return (
    <div>
      {messageSent ? (
        <h2 className="mensajeAprobado">
          Mensaje enviado con éxito &#127881; &#127881; &#127881;
        </h2>
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
          <motion.div
            className="iconos"
            ref={elementoRef6}
            initial={{ x: "-200vh" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
          >
            {isIntersecting6 && (
              <div className="iconos">
                <Link to="#" onClick={handlePhoneClick} className="icon">
                  <FaPhoneAlt className="phone" size={60} />
                </Link>
                <Link to="#" onClick={handleWhatsAppClick} className="icon">
                  <FaWhatsapp className="whatsapp" size={60} />
                </Link>
                <Link to="#" onClick={handleInstagramClick} className="icon">
                  <FaInstagram className="ig" size={60} />
                </Link>
                <Link to="#" onClick={handleLinkedInClick} className="icon">
                  <FaLinkedin className="linkedin" size={60} />
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Contactos;
