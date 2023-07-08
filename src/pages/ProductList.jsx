import React from "react";
import './css/productList.css'

import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const ProductList = () => {
  return (
    <div>
      <div className="top-fixed">
        <Announcement />
        <Navbar />
      </div>
      <div className="not-top-fixed">
        <div className="productList-container">
          <h1 className="productList-container__title">Categorías</h1>
          <div className="productList-container__filterContainer">
            <div className="productList-container__filterContainer__filter">
              <span className="productList-container__filterContainer__filter__filterText">Filtrar Productos:</span>
              <select className="productList-container__filterContainer__filter__filterText__select">
                <option className="productList-container__filterContainer__filter__filterText__select__option" disabled selected>
                    Notebooks
                </option>
                <option className="productList-container__filterContainer__filter__filterText__select__option">
                    Smartphones
                </option>
                <option className="productList-container__filterContainer__filter__filterText__select__option">
                    Juegos
                </option>
                <option className="productList-container__filterContainer__filter__filterText__select__option">
                    Accesorios
                </option>
              </select>
            </div>
            <div className="productList-container__filterContainer__filter">
              <span className="productList-container__filterContainer__filter__filterText">Ordenar Productos:</span>
              <select className="productList-container__filterContainer__filter__filterText__select">
                <option className="productList-container__filterContainer__filter__filterText__select__option" disabled selected>
                    Más relevante
                </option>
                <option className="productList-container__filterContainer__filter__filterText__select__option">
                    Precio (asc)
                </option>
                <option className="productList-container__filterContainer__filter__filterText__select__option">
                    Precio (des)
                </option>
              </select>
            </div>
          </div>
          <Products />
          <Newsletter />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
