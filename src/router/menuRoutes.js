import Contactos from "../pages/contactos/Contactos";
import HigieneYSeguridad from "../pages/higiene y seguridad/HigieneYSeguridad";
import Ingenieria from "../pages/ingenieria/Ingenieria";
import ConfianEnNosotros from "../pages/confian/ConfianEnNosotros";
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
    path: "/ingenieria",
    Element: Ingenieria,
  },
  {
    id: "ConfianEnNosotros",
    path: "/confianEnNosotros",
    Element: ConfianEnNosotros,
  },
  {
    id: "contactos",
    path: "/contactos",
    Element: Contactos,
  },
];
