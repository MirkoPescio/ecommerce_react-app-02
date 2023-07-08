import React from "react";
import "./css/footer.css";
import {
  Facebook,
  Instagram,
  Twitter,
  GitHub,
  LinkedIn,
  Phone,
  Mail,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <h2 className="footer__left__logo">E-Shop</h2>
        <div className="footer__left__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsa
          laborum ipsam quasi eveniet. Doloremque doloribus ullam adipisci sunt
          molestias pariatur facere corporis quos hic ipsum, mollitia voluptatem
          voluptatibus rem!
        </div>
        <div className="footer__left__socialContainer">
          <div className="footer__left__socialContainer__socialIcon">
            <Facebook />
          </div>
          <div className="footer__left__socialContainer__socialIcon">
            <Instagram />
          </div>
          <div className="footer__left__socialContainer__socialIcon">
            <Twitter />
          </div>
          <div className="footer__left__socialContainer__socialIcon">
            <GitHub />
          </div>
          <div className="footer__left__socialContainer__socialIcon">
            <LinkedIn />
          </div>
        </div>
      </div>
      <div className="footer__center">
        <h3 className="footer__center__title">Links Relevantes</h3>
        <ul className="footer__center__list">
            <li className="footer__center__list__listItem">Principal</li>
            <li className="footer__center__list__listItem">Carrito</li>
            <li className="footer__center__list__listItem">Smartphones</li>
            <li className="footer__center__list__listItem">Notebooks</li>
            <li className="footer__center__list__listItem">Accesorios</li>
            <li className="footer__center__list__listItem">Gaming</li>
            <li className="footer__center__list__listItem">Mi Cuenta</li>
            <li className="footer__center__list__listItem">Términos</li>
        </ul>
      </div>
      <div className="footer__right">
        <h3 className="footer__right__title">Contacto Rápido</h3>
        <p className="footer__right__contactItem"><LinkedIn /> www.linkedin.com/in/mirko-pescio-7ab632180/</p>
        <p className="footer__right__contactItem"><Phone /> +54 11-5806-9635</p>
        <p className="footer__right__contactItem"><Mail /> mirkopes.4050@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
