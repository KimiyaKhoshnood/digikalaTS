import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";
import {u25C0} from 'react-icons-kit/noto_emoji_regular/u25C0'
import Icon from "react-icons-kit";
import EachVideo from "./EachVideo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../../Redux/Posts/ProductReducer";

const RelatedVideos = () => {
  const { product, loading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
    useEffect(() => {
      setTimeout(() => {
        dispatch(fetchProduct());
    }, 1000);
  }, []);

  return (
    <div className="w-full max-w-[1676px] p-4">
      <div className="lg:border lg:border-b-4 rounded-lg lg:px-4 pt-4">
        <span>ویدئوهای مرتبط</span>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          freeMode={true}
          navigation={true}
          modules={[FreeMode, Navigation]}
          className="mySwiperflex"
        >
          {product?.RelatedVideosP.map((elem) => {
            return <SwiperSlide
            className="!w-fit h-full bg-white py-4"
            id="redSwiper"
            key={elem.id}
          ><EachVideo videoDetails={elem}/></SwiperSlide>
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedVideos;
