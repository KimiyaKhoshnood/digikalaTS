import PopularBrandItems from "./PopularBrandItems";

import Icon from "react-icons-kit";
import { star } from "react-icons-kit/feather/star";

import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation} from 'swiper/modules';
import "swiper/css/free-mode";
import 'swiper/css';
import 'swiper/css/navigation';

const PopularBrands = () => {
  let PopularBrandP = [
    {"image":"https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80", "id":1},
    {"image":"https://dkstatics-public.digikala.com/digikala-brands/7d615272ba7fc5dd708195ae858e2971de86a06f_1649498033.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80", "id":2},
    {"image":"https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80", "id":3},
    {"image":"https://dkstatics-public.digikala.com/digikala-brands/7d615272ba7fc5dd708195ae858e2971de86a06f_1649498033.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80", "id":4},
    {"image":"https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80", "id":5},
    {"image":"https://dkstatics-public.digikala.com/digikala-brands/7d615272ba7fc5dd708195ae858e2971de86a06f_1649498033.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80", "id":6},
    {"image":"https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80", "id":7},
    {"image":"https://dkstatics-public.digikala.com/digikala-brands/7d615272ba7fc5dd708195ae858e2971de86a06f_1649498033.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80", "id":8},
    {"image":"https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80", "id":9},
    {"image":"https://dkstatics-public.digikala.com/digikala-brands/7d615272ba7fc5dd708195ae858e2971de86a06f_1649498033.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80", "id":10},
    {"image":"https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80", "id":11},
    {"image":"https://dkstatics-public.digikala.com/digikala-brands/7d615272ba7fc5dd708195ae858e2971de86a06f_1649498033.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80", "id":12},
    {"image":"https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80", "id":13},
    {"image":"https://dkstatics-public.digikala.com/digikala-brands/7d615272ba7fc5dd708195ae858e2971de86a06f_1649498033.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80", "id":14},
  ]


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
              {PopularBrandP.map((elem) => {
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
