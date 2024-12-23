import UserStory from "./UserStory";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPost } from "../../../Redux/Posts/PostReducer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UserStories = () => {
  const { home, loading, error } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchPost());
    }, 1000);
  }, []);



  return (
    <>
        <div className="flex justify-center lg:px-4 ">
          <div className="w-full h-fit py-4 max-w-[1336px]">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={5}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper h-full"
            >
              {home?.UserStoriesP.map((elem) => {
                return (
                  <SwiperSlide className="!w-fit h-full" key={elem.id}>
                    <UserStory
                      text={elem.text}
                      img={elem.img}
                      status={elem.status}
                    />
                  </SwiperSlide>
                );
              })}
              {loading && Array(15).fill(0).map((_,i)=>{
                return (
                  <SwiperSlide className="!w-fit h-full" key={i}>
                    <div className="flex flex-col items-center px-5">
                        <Skeleton circle={true} height={80} width={80} />
                        <Skeleton width={80} />
                        <Skeleton width={40} />
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
    </>
  );
};

export default UserStories;
