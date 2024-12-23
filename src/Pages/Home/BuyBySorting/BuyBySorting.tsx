import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import BuyBySortingItems from "./BuyBySortingItems";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPost } from "../../../Redux/Posts/PostReducer";

const BuyBySorting = () => {
  const { home, loading, error } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
  }, []);
  
  return (
    <>
      <div className="w-full flex justify-center py-5">
        <div className="max-w-[1336px] w-full flex flex-col gap-5">
          <h3 className="text-center text-lg">خرید بر اساس دسته‌بندی</h3>
          <div>
            <Swiper
              slidesPerView={"auto"}
              navigation={true}
              spaceBetween={0}
              freeMode={true}
              modules={[Navigation, FreeMode]}
              className="mySwiper w-full"
            >
              <SwiperSlide className="h-full lg:min-w-full !w-fit">
                <div className="lg:grid-rows-2 lg:w-full lg:gap-x-[10px] sm:gap-x-[50px] gap-x-[0px] grid grid-flow-col grid-rows-3 w-fit sm:px-8 sm:py-0 p-1">
                  {home?.BuyBySortingItemsP.map((elem) => {
                    return (
                      <BuyBySortingItems
                        text={elem.text}
                        image={elem.image}
                        key={elem.id}
                      />
                    );
                  })}
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyBySorting;
