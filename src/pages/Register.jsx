import React from "react";
import "./css/register.css";

import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
  return (
    <div>
      <div className="top-fixed">
        <Announcement />
        <Navbar />
      </div>
      <div className="not-top-fixed">
        <div className="register">
          <div className="register__wrapper">
            <h1 className="register__wrapper__title">CREAR UNA CUENTA</h1>
            <form className="register__wrapper__form">
              <input
                type="text"
                className="register__wrapper__form__input"
                placeholder="Nombre"
                required
              />
              <input
                type="text"
                className="register__wrapper__form__input"
                placeholder="Apellido"
                required
              />
              <input
                type="text"
                className="register__wrapper__form__input"
                placeholder="Nombre de usuario"
                required
              />
              <input
                type="email"
                className="register__wrapper__form__input"
                placeholder="E-Mail"
                required
              />
              <input
                type="password"
                className="register__wrapper__form__input"
                placeholder="Contraseña"
                required
              />
              <input
                type="password"
                className="register__wrapper__form__input"
                placeholder="Confirme su contraseña"
                required
              />
              <p className="register__wrapper__form__agreement">
                Al crear una cuenta, proporciona su consentimiento con el
                procesamiento de sus datos personales en concordancia con
                nuestra <b>POLITICA DE PRIVACIDAD</b>
              </p>
              <button type="submit" className="register__wrapper__form__button">
                CREAR CUENTA
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Register;
