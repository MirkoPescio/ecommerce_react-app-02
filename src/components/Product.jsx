import React from "react";
import "./css/product.css";
import styled from "styled-components";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";

const Info = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0; left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Product = ({ item }) => {
  return (
    <Container className="product">
      <div className="product__circle"></div>
      <img src={item.img} alt={item.img} className="product__image" />
      <Info className="product__info">
        <div className="product__info__icon">
          <ShoppingCartOutlined />
        </div>
        <div className="product__info__icon">
          <SearchOutlined />
        </div>
        <div className="product__info__icon">
          <FavoriteBorderOutlined />
        </div>
      </Info>
    </Container>
  );
};

export default Product;
