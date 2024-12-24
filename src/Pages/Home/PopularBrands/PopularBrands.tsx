import PopularBrandItems from "./PopularBrandItems";

import Icon from "react-icons-kit";
import { star } from "react-icons-kit/feather/star";

import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation} from 'swiper/modules';
import "swiper/css/free-mode";
import 'swiper/css';
import 'swiper/css/navigation';
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/Store";
import { fetchPost } from "../../../Redux/Posts/PostReducer";

const PopularBrands:React.FC = () => {

  const { home, loading, error } = useSelector((state:RootState) => state.home);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
      setTimeout(() => {
        dispatch(fetchPost());
      }, 1000);
    }, []);

  return (
    <>
      <div className="flex justify-center lg:p-4">
        <div className="max-w-[1336px] lg:py-6 w-full rounded-xl lg:border flex flex-col items-center lg:gap-4 gap-2">
          <h3 className="lg:text-xl text-lg text-center flex gap-2 py-1">
            <Icon className="text-yellow-400" icon={star} size={20}/>
            محبوب‌ترین برندها
          </h3>
          <div className="w-full">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={1}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper h-full"
            >
              {home?.PopularBrandP.map((elem) => {
                return (
                  <SwiperSlide className="!w-fit h-full border-l" key={elem.id}>
                    <PopularBrandItems image={elem.image}/>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularBrands;
