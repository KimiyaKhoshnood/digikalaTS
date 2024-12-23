import Icon from "react-icons-kit";
import { arrowLeft } from "react-icons-kit/feather/arrowLeft";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";
import PriceWithToman from "../../../Components/PriceWithToman/PriceWithToman";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../../Redux/Posts/ProductReducer";

const PindoRelated = () => {
  const { product, loading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
    useEffect(() => {
      setTimeout(() => {
        dispatch(fetchProduct());
    }, 1000);
  }, []);
  return (
    <div className="lg:block hidden w-full max-w-[1676px] p-4">
      <div className="bg-gray-100 bg-[url(https://www.digikala.com/_next/static/media/PindoTouchPointBackground.f54ee21d.svg)] bg-no-repeat bg-right w-full rounded-lg p-4 flex lg:flex-row flex-col justify-between">
        <div className="flex items-center">
          <div>
            <img
              className="w-16 h-16"
              src="https://www.digikala.com/statics/img/svg/pindo.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <img
              className="h-7"
              src="https://www.digikala.com/statics/img/svg/Pindo-logo.svg"
              alt=""
            />
            <span>رایگان آگهی بگذارید!</span>
          </div>
        </div>
        <div className="flex items-center">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            freeMode={true}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className="mySwiperflex"
          >
            {product?.PindoRelatedP.map((elem) => {
              return (
                <SwiperSlide
                  className="!w-fit h-full"
                  id="redSwiper"
                  key={elem.id}
                >
                  <div className="flex gap-2">
                    <div className="h-[74px] flex items-center">
                      <img className="w-[74px]" src={elem.img} alt="" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="line-clamp-1 max-w-[74px] text-xs">
                        {elem.title}
                      </p>
                      <PriceWithToman
                        price={elem.price}
                        textSize={"text-[11px]"}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <a className="bg-white py-2 px-3 rounded-3xl h-fit" href="">
            <span className="text-xs">آگهی‌های مرتبط</span>
            <Icon icon={arrowLeft} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PindoRelated;
