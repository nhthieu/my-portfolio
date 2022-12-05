import { forwardRef } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider.css"

const SlickSlider = forwardRef((props, ref) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease-out',
    variableWidth: true,
    variableHeight: true
  };

  return (
    <Slider ref={ref} {...settings}>
      {props.children}
    </Slider>
  );
});

export default SlickSlider;