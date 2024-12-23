import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwipperImages from "./SwipperImages";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPost } from "../../../Redux/Posts/PostReducer";
import Skeleton from "react-loading-skeleton";


const MainSwipper = () => {
    const { home, loading, error } = useSelector((state) => state.home);
    const dispatch = useDispatch();
    useEffect(() => {
      setTimeout(() => {
        dispatch(fetchPost());
      }, 1000);
    }, []);
  return (
    <>
    {home && <div className="flex justify-center">
      <div className="max-w-[1920px] xl:h-[400px] lg:h-[300px] h-fit w-full lg:block hidden">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          slidesPerView={'auto'}
          spaceBetween={0}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper h-full"
        >
            {
                home?.MainSwiperImagesP.map((elem)=>{
                    return (
                      <>
                    <SwiperSlide className="h-full w-full" key={elem.id}>
                        <SwipperImages image={elem.imageLg}/>
                    </SwiperSlide>
                    </>
                    )
                })
            }
        </Swiper>
      </div>
      <div className="max-w-[1920px] xl:h-[400px] lg:h-[300px] h-[180px] w-full lg:hidden block">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          slidesPerView={'auto'}
          spaceBetween={0}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper h-full"
        >
            {
                home?.MainSwiperImagesP.map((elem)=>{
                    return (
                      <>
                    <SwiperSlide className="h-full w-full" key={elem.id}>
                        <SwipperImages image={elem.imageSm}/>
                    </SwiperSlide>
                    </>
                    )
                })
            }
        </Swiper>
      </div>
    </div>}
    {loading && <Skeleton className="xl:h-[400px] lg:h-[300px] h-[180px]"/>}
    </>
  );
};

export default MainSwipper;
