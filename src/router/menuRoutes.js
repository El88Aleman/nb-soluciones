import Contactos from "../pages/contactos/Contactos";
import HigieneYSeguridad from "../pages/higiene y seguridad/HigieneYSeguridad";
import Ingenieria from "../pages/ingenieria/Ingenieria";
import ProyectosRealizados from "../pages/proyectos realizados/ProyectosRealizados.jsx";
import SobreMi from "../pages/sobre mi/SobreMi";

export const routes = [
  {
    id: "SobreMi",
    path: "/",
    Element: SobreMi,
  },
  {
    id: "higieneySeguridad",
    path: "/higieneYseguridad",
    Element: HigieneYSeguridad,
  },
  {
    id: "Ingenieria",
    path: "/Ingenieria",
    Element: Ingenieria,
  },
  {
    id: "proyectosRealizados",
    path: "/proyectosRealizados",
    Element: ProyectosRealizados,
  },
  {
    id: "contactos",
    path: "/contactos",
    Element: Contactos,
  },
];
