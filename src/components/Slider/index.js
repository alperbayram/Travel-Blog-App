import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

import { Pagination } from "swiper";
const images = [
  { id: 1, href: "./img/slider/Image.png" },
  {
    id: 2,
    href: "./img/slider/Image2.png",
  },
  { id: 3, href: "./img/slider/Image3.png" },
  { id: 4, href: "./img/slider/Image4.png" },
];

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <div class="container ">
          {images.map((image) => (
            <SwiperSlide>
              <img
                src={image.href}
                alt="food"
                className="img-fluid bg-transparent"
              />
              <div className="head">
                <div>
                  <span>tag</span>
                </div>
                <h2>
                  Richird Norton photorealistic <br />
                  rendering as real photos
                </h2>
                <div className="headtext">
                  <span>08.08.2021</span>
                  <p>
                    Progressively incentivize cooperative systems through
                    technically sound functionalities. The credibly productivate
                    seamless data.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}
