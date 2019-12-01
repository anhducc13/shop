import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./style.scss";

const NextArrow = (props) => {
  const {className, style, onClick} = props;
  return (
    <button className={`${className} arrow-slick1 next-slick1}`} style={style} onClick={onClick}><i
      className="zmdi zmdi-caret-right"/>
    </button>
  )
};

const PreArrow = (props) => {
  const {className, style, onClick} = props;
  return (
    <button className={`${className} arrow-slick1 prev-slick1`} style={style} onClick={onClick}><i
      className="zmdi zmdi-caret-left"/>
    </button>
  )
};

export default () => {
  const settings = {
    infinite: true,
    fade: true,
    speed: 600,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow/>,
    prevArrow: <PreArrow/>,
  };
  return (
    <section className="section-slide">
      <div className="wrap-slick1">
        <Slider className="slick1" {...settings}>
          <div>
            <div className="item-slick1" style={{backgroundImage: 'url(/images/slide-01.jpg)'}}>
              <div className="container h-full">
                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                  <div className="layer-slick1 animated">
          <span className="ltext-101 cl2 respon2">
          Women Collection 2018
          </span>
                  </div>
                  <div className="layer-slick1 animated">
                    <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                      NEW SEASON
                    </h2>
                  </div>
                  <div className="layer-slick1 animated">
                    <a href="product.html"
                       className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="item-slick1" style={{backgroundImage: 'url(/images/slide-02.jpg)'}}>
              <div className="container h-full">
                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                  <div className="layer-slick1 animated">
                    <span className="ltext-101 cl2 respon2">
                      Men New-Season
                    </span>
                  </div>
                  <div className="layer-slick1 animated">
                    <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                      Jackets &amp; Coats
                    </h2>
                  </div>
                  <div className="layer-slick1 animated">
                    <a href="product.html"
                       className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="item-slick1" style={{backgroundImage: 'url(/images/slide-03.jpg)'}}>
              <div className="container h-full">
                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                  <div className="layer-slick1 animated">
                    <span className="ltext-101 cl2 respon2">
                      Men Collection 2018
                    </span>
                  </div>
                  <div className="layer-slick1 animated">
                    <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                      New arrivals
                    </h2>
                  </div>
                  <div className="layer-slick1 animated">
                    <a href="product.html"
                       className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>

  )
}
;
