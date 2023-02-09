import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <Carousel {...settings} style={{Height:"15vh"}}>
      <Wrap>
        <img
          style={{ width: "100%" }}
          src="/images/slider-badging.jpg"
          alt="dhdh"
        />
      </Wrap>
      <Wrap>
        <img
          style={{ width: "100%" }}
          src="/images/slider-badag.jpg"
          alt="dhdh"
        />
      </Wrap>
      <Wrap>
        <img
          style={{ width: "100%" }}
          src="/images/slider-scale.jpg"
          alt="dhdh"
        />
      </Wrap>
      <Wrap>
        <img
          style={{ width: "100%" }}
          src="/images/slider-scales.jpg"
          alt="dhdh"
        />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;
const Carousel = styled(Slider)`
  margin-top: 20px;
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 2;
  }
  box-sizing: border-box;
`;
const Wrap = styled.div`
  img {
    border: 4px solid transparent;
    margin: 0 20px;
    border-radius: 10px;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
      &:hover{
        border: 4px solid white;
        cursor: pointer;
      }
  }
`;