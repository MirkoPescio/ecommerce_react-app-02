import React from "react";
import './css/login.css'

import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Login = () => {
  return (
    <div>
      <div className="top-fixed">
        <Announcement />
        <Navbar />
      </div>
      <div className="not-top-fixed">
        <div className="login">
            <div className="login__wrapper">
                <h1 className="login__wrapper__title">INGRESAR</h1>
                <form className="login__wrapper__form">
                    <input type="text" className="login__wrapper__form__input" placeholder="Nombre de usuario" required />
                    <input type="password" className="login__wrapper__form__input" placeholder="Contraseña" required />
                    <button type="submit" className="login__wrapper__form__button">INGRESAR</button>
                    <a className="login__wrapper__form__link">¿No recuerda su contraseña?</a>
                    <a className="login__wrapper__form__link">CREAR UNA CUENTA</a>
                </form>
            </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
