import HighlightItems from "./HighlightItems";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

// import required modules
import { FreeMode, Scrollbar } from "swiper/modules";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../../Redux/Posts/PostReducer";
import Skeleton from "react-loading-skeleton";

const Highlights = () => {

  const { home, loading, error } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchPost());
    }, 1000);
  }, []);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions) 

  }, []);


  return (
    <>
      <div className="flex justify-center w-full lg:px-4">
        <div className="py-3 flex lg:justify-between max-w-[1336px] w-full">
          <Swiper
            slidesPerView={width>1024?10:"auto"}
            spaceBetween={5}
            freeMode={true}
            scrollbar={{clickable: true}}
            modules={[FreeMode, Scrollbar]}
            className="mySwiper !w-full lg:grid lg:grid-cols-10"
          >
            {home?.HighlightItemsP.map((elem, index) => {
              return (
                <SwiperSlide key={index} className="h-full w-fit">
                  <HighlightItems text={elem.text} image={elem.image} key={elem.id}/>
                </SwiperSlide>
              );
            })}

            {home && <SwiperSlide className="h-full w-fit">
                  <HighlightItems text={"بیشتر"} image={""} key={10}/>
            </SwiperSlide>}
            {
              loading && Array(10).fill(0).map((elem, index) => {
                return (
                  <SwiperSlide key={index} className="h-full w-fit">
                    <div className="flex gap-2 flex-col items-center">
                      <Skeleton width={52} height={52} borderRadius={10}/>
                      <Skeleton width={60}/>
                    </div>
                  </SwiperSlide>
                );
              })
            }
          </Swiper>
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default Highlights;
