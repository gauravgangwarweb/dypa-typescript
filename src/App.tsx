import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import image1 from "./assets/img_1.jpg";
import image2 from "./assets/img_2.jpg";
import image3 from "./assets/img_3.jpg";
import image4 from "./assets/img_4.jpg";
import image5 from "./assets/img_5.jpg";
import image6 from "./assets/img_6.jpg";

// SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const App: React.FC = () => {
  return (
    <div className="container">
      <h1 className="heading">Slider Component</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          // clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className="flex flex-col">
            <img src={image1} alt="image1" />
            <div className="w-full bg-white pt-5 pb-14 px-8 rounded-br-[20px] rounded-bl-[20px]">
              <h4 className="font-bold text-2xl">New Data</h4>
              <p className="mt-1 text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                magnam dolore necessitatibus at exercitationem odio quibusdam
                doloribus error, fugiat architecto consectetur dolores minima
                nisi assumenda soluta commodi quidem. Iste, sapiente.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col">
            <img src={image2} alt="image1" />
            <div className="w-full bg-white pt-5 pb-14 px-8 rounded-br-[20px] rounded-bl-[20px]">
              <h4 className="font-bold text-2xl">New Data</h4>
              <p className="mt-1 text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                magnam dolore necessitatibus at exercitationem odio quibusdam
                doloribus error, fugiat architecto consectetur dolores minima
                nisi assumenda soluta commodi quidem. Iste, sapiente.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col">
            <img src={image3} alt="image1" />
            <div className="w-full bg-white pt-5 pb-14 px-8 rounded-br-[20px] rounded-bl-[20px]">
              <h4 className="font-bold text-2xl">New Data</h4>
              <p className="mt-1 text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                magnam dolore necessitatibus at exercitationem odio quibusdam
                doloribus error, fugiat architecto consectetur dolores minima
                nisi assumenda soluta commodi quidem. Iste, sapiente.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col">
            <img src={image4} alt="image1" />
            <div className="w-full bg-white pt-5 pb-14 px-8 rounded-br-[20px] rounded-bl-[20px]">
              <h4 className="font-bold text-2xl">New Data</h4>
              <p className="mt-1 text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                magnam dolore necessitatibus at exercitationem odio quibusdam
                doloribus error, fugiat architecto consectetur dolores minima
                nisi assumenda soluta commodi quidem. Iste, sapiente.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col">
            <img src={image5} alt="image1" />
            <div className="w-full bg-white pt-5 pb-14 px-8 rounded-br-[20px] rounded-bl-[20px]">
              <h4 className="font-bold text-2xl">New Data</h4>
              <p className="mt-1 text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                magnam dolore necessitatibus at exercitationem odio quibusdam
                doloribus error, fugiat architecto consectetur dolores minima
                nisi assumenda soluta commodi quidem. Iste, sapiente.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col">
            <img src={image6} alt="image1" />
            <div className="w-full bg-white pt-5 pb-14 px-8 rounded-br-[20px] rounded-bl-[20px]">
              <h4 className="font-bold text-2xl">New Data</h4>
              <p className="mt-1 text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                magnam dolore necessitatibus at exercitationem odio quibusdam
                doloribus error, fugiat architecto consectetur dolores minima
                nisi assumenda soluta commodi quidem. Iste, sapiente.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default App;
