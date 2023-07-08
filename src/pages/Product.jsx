import React from "react";
import "./css/product.css";
import { Add, Remove } from "@mui/icons-material";

import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Product = () => {
  return (
    <div>
      <div className="top-fixed">
        <Announcement />
        <Navbar />
      </div>
      <div className="not-top-fixed">
        <div className="product-container">
          <div className="product-container__imageContainer">
            <img
              className="product-container__imageContainer__image"
              src="https://d1eh9yux7w8iql.cloudfront.net/product_images/308304_42d20316-cc4f-47ee-b868-3475ebb62ca4.jpg"
              alt="imagen-genérica"
            />
          </div>
          <div className="product-container__infoContainer">
            <h2 className="product-container__infoContainer__title">
              Product Name
            </h2>
            <p className="product-container__infoContainer__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              adipisci suscipit sequi eum consequatur! Expedita modi asperiores
              amet nihil dolores esse! Incidunt dolor deleniti sint recusandae
              nemo, veniam expedita voluptatem!
            </p>
            <span className="product-container__infoContainer__price">
              $ 7500
            </span>
            <div className="product-container__addContainer">
              <div className="product-container__addContainer__amountContainer">
                <Remove className="product-container__addContainer__amountContainer__remove" />
                <span className="product-container__addContainer__amountContainer__amount">1</span>
                <Add className="product-container__addContainer__amountContainer__add" />
              </div>
              <button className="product-container__addContainer__button">
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default Product;
