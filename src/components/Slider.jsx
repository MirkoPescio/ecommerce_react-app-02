import React, { useState } from "react";
import "./css/slider.css";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { styled } from "styled-components";

import { sliderItems } from "../data.js";


const Arrow = styled.div`
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
`;

const Wrapper = styled.div`
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  background-color: #${(props) => props.bg};
`;

const Image = styled.img`
  height: 80%;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="slider">
      <Arrow
        className="slider__arrow"
        direction="left"
        onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper className="slider__wrapper" slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide className="slider__wrapper__slide" bg={item.bg}>
            <div className="slider__wrapper__slide__imgContainer">
              <Image
                src={require(`../assets/${item.img}`)}
                className="slider__wrapper__slide__imgContainer__image"
                alt={item.img}
              />
            </div>
            <div className="slider__wrapper__slide__infoContainer">
              <h2 className="slider__wrapper__slide__infoContainer__title">
                {item.title}
              </h2>
              <p className="slider__wrapper__slide__infoContainer__description">
                {item.desc}
              </p>
              <button className="slider__wrapper__slide__infoContainer__button">
                VER AHORA
              </button>
            </div>
          </Slide>
        ))}
      </Wrapper>
      <Arrow
        className="slider__arrow"
        direction="right"
        onClick={() => handleClick("right")}
      >
        <ArrowRightOutlined />
      </Arrow>
    </div>
  );
};

export default Slider;
