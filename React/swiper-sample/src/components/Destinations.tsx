
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MargallaHills from "../images/margalla-hills.jpg";
import Monal from "../images/monal.jpg";
import Monument from "../images/monument.jpg";
import SaidpurVillage from "../images/saidpur-village.jpg";
import ShahFaisalMosque from "../images/shah-faisal-mosque.jpg";
import React from "react";
import "./Destinations.css";

export const Destinations = () => {
  return (
    <div className="destinations">
      <Swiper slidesPerView={4} grabCursor={true} className="destinations-slider">
        <SwiperSlide>
          <img src={MargallaHills} alt="Margalla Hills Islamabad" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Monal} alt="Monal Islamabad" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Monument} alt="Monument Islamabad" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SaidpurVillage} alt="Saidpur Village Islamabad" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ShahFaisalMosque} alt="Shah Faisal Mosque Islamabad" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
