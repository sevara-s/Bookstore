import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Input } from "antd";

import "swiper/css";
import "swiper/css/pagination";

import showcase from "../../../assets/imgs/showcase.png";
import showcase2 from "../../../assets/imgs/showcase2.png";
import search from "../../../assets/svgs/search.svg"

const { Search } = Input;

const Showcase = () => {
  return (
    <section className="bg-[#191919] py-10 overflow-hidden relative">
      <div className="container">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="w-full"
        >
          {/* Slide 1 */}
          <SwiperSlide className="relative flex justify-center items-center">
            <img
              src={showcase}
              className="w-full h-auto object-cover"
              alt="Main"
            />
            <img
              src={showcase2}
              alt="Small Right Image"
              className="absolute right-10 top-1/2 transform -translate-y-1/2 w-[280px] h-auto opacity-40"
            />
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide className="relative flex justify-center items-center">
            <img
              src={showcase}
              className="w-full h-auto object-cover"
              alt="Main"
            />
            <img
              src={showcase2}
              alt="Small Right Image"
              className="absolute right-10 top-1/2 transform -translate-y-1/2 w-[280px] h-auto opacity-40"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* search */}
      <div className="search absolute bottom-0 left-1/2 transform -translate-x-1/2  p-2 w-3/4 rounded-[15px] z-10">
      <h1 className="qidirish text-center font-[400] text-[31px] text-[#c9ac8c] p-[10px]">Qidirish</h1>
         <div className="searching flex items-center gap-[15px] justify-center pb-[10px]">
            <input type="search" className="outline-none bg-[#404040] rounded-[15px] p-[10px] w-[70%] placeholder:text-[black] placeholder:opacity-30" placeholder="Adiblar, kitoblar, audiolar, maqolalar... " />
            <button className="flex items-center gap-[5px] bg-[#c9ac8c;] rounded-[15px] p-[10px]"><img src={search} className="fill-black" alt="" /> <p>Izlash</p></button>
         </div>
      </div>

      {/* Pagination Style */}
      <style>
        {`
          .swiper-pagination-bullet {
            background-color: #c9ac8c !important;
            width: 10px;
            height: 10px;
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            background-color: #c9ac8c !important;
            width: 12px;
            height: 12px;
          }
        `}
      </style>
    </section>
  );
};

export default Showcase;
