import React from "react";
import "./css/cart.css";
import { styled } from "styled-components";
import { Add, Remove } from "@mui/icons-material";

import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";


const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const Cart = () => {
  return (
    <div>
      <div className="top-fixed">
        <Announcement />
        <Navbar />
      </div>
      <div className="not-top-fixed">
        <div className="cart-container">
          <div className="cart-container__wrapper">
            <h1 className="cart-container__wrapper__title">Tu Carrito</h1>
            <div className="cart-container__wrapper__top">
              <TopButton className="cart-container__wrapper__top__button">
                Ver otros productos
              </TopButton>
              <div className="cart-container__wrapper__top__topTexts">
                <span className="cart-container__wrapper__top__topTexts__text">
                  Carrito de compras (2)
                </span>
                <span className="cart-container__wrapper__top__topTexts__text">
                  Lista de productos deseados (0)
                </span>
              </div>
              <TopButton
                className="cart-container__wrapper__top__button"
                type="filled"
              >
                Proceder a pagar
              </TopButton>
            </div>
            <div className="cart-container__wrapper__bottom">
              <div className="cart-container__wrapper__bottom__info">
                <div className="cart-container__wrapper__bottom__info__product">
                  <div className="cart-container__wrapper__bottom__info__product__productDetail">
                    <img
                      src="https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/UXT2MHW3GZIZVICCIMPIDDZEBQ.jpg"
                      alt="img"
                      className="cart-container__wrapper__bottom__info__product__productDetail__image"
                    />
                    <div className="cart-container__wrapper__bottom__info__product__productDetail__details">
                      <span className="cart-container__wrapper__bottom__info__product__productDetail__details__name">
                        <b>PRODUCTO:</b> Uncharted 4 PS4
                      </span>
                      <span className="cart-container__wrapper__bottom__info__product__productDetail__details__id">
                        <b>ID: </b> 573786936
                      </span>
                    </div>
                  </div>
                  <div className="cart-container__wrapper__bottom__info__product__priceDetail">
                    <div className="cart-container__wrapper__bottom__info__product__priceDetail__amount">
                      <Add />
                      <div className="cart-container__wrapper__bottom__info__product__priceDetail__amount__productAmount">
                        1
                      </div>
                      <Remove />
                    </div>
                    <div className="cart-container__wrapper__bottom__info__product__priceDetail__productPrice">
                      $ 9800
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart-container__wrapper__bottom__summary">
                <h3 className="cart-container__wrapper__bottom__summary__title">ORDER SUMMARY</h3>
                <SummaryItem className="cart-container__wrapper__bottom__summary__item">
                  <span className="cart-container__wrapper__bottom__summary__item__text">Subtotal</span>
                  <span className="cart-container__wrapper__bottom__summary__item__price">$ 9800</span>
                </SummaryItem>
                <SummaryItem className="cart-container__wrapper__bottom__summary__item">
                  <span className="cart-container__wrapper__bottom__summary__item__text">Costo de envío</span>
                  <span className="cart-container__wrapper__bottom__summary__item__price">$ 2000</span>
                </SummaryItem>
                <SummaryItem className="cart-container__wrapper__bottom__summary__item">
                  <span className="cart-container__wrapper__bottom__summary__item__text">Descuento</span>
                  <span className="cart-container__wrapper__bottom__summary__item__price">10,00 %</span>
                </SummaryItem>
                <SummaryItem className="cart-container__wrapper__bottom__summary__item">
                  <span className="cart-container__wrapper__bottom__summary__item__text">TOTAL</span>
                  <span className="cart-container__wrapper__bottom__summary__item__price">$ 11800</span>
                </SummaryItem>
                <button className="cart-container__wrapper__bottom__summary__button">PAGAR AHORA</button>
              </div>
            </div>
          </div>
          <hr style={{ backgroundColor: "#eee", border: "none" }} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
