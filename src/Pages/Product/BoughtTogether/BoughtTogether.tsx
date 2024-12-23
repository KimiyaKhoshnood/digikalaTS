import TopicWithRedLine from "../TopicWithRedLine/TopicWithRedLine";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";
import AmazingSuggestionItems from "../../Home/AmazingSuggestion/AmazingSuggestionItems";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../../Redux/Posts/ProductReducer";

const BoughtTogether = () => {
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
        <TopicWithRedLine title={"در کنارش خریداری شده"} />
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          freeMode={true}
          navigation={true}
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
            {
            product?.BoughtTogetherP.map((elem)=>{
                return <SwiperSlide className="!w-fit h-full bg-white py-4" id="redSwiper" key={elem.id}>
                    <AmazingSuggestionItems
                      image={elem.image}
                      title={elem.title}
                      oldPrice={elem.oldPrice}
                      newPrice={elem.newPrice}
                      off={elem.off}
                    />
                  </SwiperSlide>
            })
        }
        </Swiper>
      </div>
    </div>
  );
};

export default BoughtTogether;
