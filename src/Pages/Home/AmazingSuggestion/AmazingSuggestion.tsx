import AmazingSuggestionItems from "./AmazingSuggestionItems";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Icon from "react-icons-kit";

import {ic_keyboard_arrow_left} from 'react-icons-kit/md/ic_keyboard_arrow_left'
import {arrowLeft} from 'react-icons-kit/feather/arrowLeft'
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPost } from "../../../Redux/Posts/PostReducer";

const AmazingSuggestion = () => {
    // let AmazingSuggestionP = [
    //     {"image":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "title":"ساعت هوشمند ورنا مدل W49 ultra with 7 Bands", "oldPrice":"۱,۰۰۰,۰۰۰", "newPrice":"۷۵۸,۰۰۰", "off":"۲۴"},
    //     {"image":"https://dkstatics-public.digikala.com/digikala-products/c157c00d7dd882089e1eb6959352e5cb2132ebe1_1646038481.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "title":"کرم مرطوب کننده و آبرسان آرت وینا مدل اکسترا پلاس حجم 75 میلی لیتر", "oldPrice":"۶۸۰,۰۰۰", "newPrice":"۲۷۹,۰۰۰", "off":"۵۹"},
    //     {"image":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "title":"ساعت هوشمند ورنا مدل W49 ultra with 7 Bands", "oldPrice":"۱,۰۰۰,۰۰۰", "newPrice":"۷۵۸,۰۰۰", "off":"۲۴"},
    //     {"image":"https://dkstatics-public.digikala.com/digikala-products/c157c00d7dd882089e1eb6959352e5cb2132ebe1_1646038481.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "title":"کرم مرطوب کننده و آبرسان آرت وینا مدل اکسترا پلاس حجم 75 میلی لیتر", "oldPrice":"۶۸۰,۰۰۰", "newPrice":"۲۷۹,۰۰۰", "off":"۵۹"},
    //     {"image":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "title":"ساعت هوشمند ورنا مدل W49 ultra with 7 Bands", "oldPrice":"۱,۰۰۰,۰۰۰", "newPrice":"۷۵۸,۰۰۰", "off":"۲۴"},
    //     {"image":"https://dkstatics-public.digikala.com/digikala-products/c157c00d7dd882089e1eb6959352e5cb2132ebe1_1646038481.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "title":"کرم مرطوب کننده و آبرسان آرت وینا مدل اکسترا پلاس حجم 75 میلی لیتر", "oldPrice":"۶۸۰,۰۰۰", "newPrice":"۲۷۹,۰۰۰", "off":"۵۹"},
    //     {"image":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "title":"ساعت هوشمند ورنا مدل W49 ultra with 7 Bands", "oldPrice":"۱,۰۰۰,۰۰۰", "newPrice":"۷۵۸,۰۰۰", "off":"۲۴"},
    //     {"image":"https://dkstatics-public.digikala.com/digikala-products/c157c00d7dd882089e1eb6959352e5cb2132ebe1_1646038481.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "title":"کرم مرطوب کننده و آبرسان آرت وینا مدل اکسترا پلاس حجم 75 میلی لیتر", "oldPrice":"۶۸۰,۰۰۰", "newPrice":"۲۷۹,۰۰۰", "off":"۵۹"},
    //     {"image":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "title":"ساعت هوشمند ورنا مدل W49 ultra with 7 Bands", "oldPrice":"۱,۰۰۰,۰۰۰", "newPrice":"۷۵۸,۰۰۰", "off":"۲۴"},
    //     {"image":"https://dkstatics-public.digikala.com/digikala-products/c157c00d7dd882089e1eb6959352e5cb2132ebe1_1646038481.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "title":"کرم مرطوب کننده و آبرسان آرت وینا مدل اکسترا پلاس حجم 75 میلی لیتر", "oldPrice":"۶۸۰,۰۰۰", "newPrice":"۲۷۹,۰۰۰", "off":"۵۹"},
    //     {"image":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "title":"ساعت هوشمند ورنا مدل W49 ultra with 7 Bands", "oldPrice":"۱,۰۰۰,۰۰۰", "newPrice":"۷۵۸,۰۰۰", "off":"۲۴"},
    //     {"image":"https://dkstatics-public.digikala.com/digikala-products/c157c00d7dd882089e1eb6959352e5cb2132ebe1_1646038481.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "title":"کرم مرطوب کننده و آبرسان آرت وینا مدل اکسترا پلاس حجم 75 میلی لیتر", "oldPrice":"۶۸۰,۰۰۰", "newPrice":"۲۷۹,۰۰۰", "off":"۵۹"},
    // ]

    const { home, loading, error } = useSelector((state) => state.home);
    const dispatch = useDispatch();
    useEffect(() => {
      setTimeout(() => {
        dispatch(fetchPost());
      }, 1000);
    }, []);

  return (
    <>
      <div className="w-full flex justify-center py-2 lg:px-4">
        <div className={`max-w-[1336px] w-full ${loading?"bg-gray-100":"bg-gradient-to-bl from-[#d22c4e] via-[#ee384e] to-[#ef5662]"} lg:rounded-2xl h-[300px] py-[20px] flex flex-col gap-4`}>
          <div className="lg:hidden flex justify-between px-4 items-center">
            <div className="flex items-center gap-2">
                <img className="w-[24px] h-[25px]" src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazing.svg" alt="" />
                <img className="h-[20px]" src="https://www.digikala.com/statics/img/svg/typography/incredible-word.svg" alt="" />
                <div className="flex gap-1 justify-center">
                    <span className="flex justify-center items-center text-sm w-[26px] h-[26px] bg-white rounded-md">01</span>
                    :
                    <span className="flex justify-center items-center text-sm w-[26px] h-[26px] bg-white rounded-md">21</span>
                    :
                    <span className="flex justify-center items-center text-sm w-[26px] h-[26px] bg-white rounded-md">00</span>
                </div>
            </div>
            <a className="text-xs text-white" href="">همه<Icon icon={ic_keyboard_arrow_left}/></a>
          </div>
          <div className="h-full px-1">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={3}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper h-full lg:pl-5 pl-4 lg:pr-0 pr-4"
            >
              <SwiperSlide className="!w-[160px] h-full lg:!block !hidden">
                {home && <a href="" className="flex flex-col items-center justify-between h-full py-3">
                  <img className="w-[88px] h-[88px]" src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg" alt="" />
                  <div className="flex gap-1 justify-center">
                    <span className="flex justify-center items-center text-sm w-[26px] h-[26px] bg-white rounded-md">01</span>
                    :
                    <span className="flex justify-center items-center text-sm w-[26px] h-[26px] bg-white rounded-md">21</span>
                    :
                    <span className="flex justify-center items-center text-sm w-[26px] h-[26px] bg-white rounded-md">00</span>
                  </div>
                  <img className="w-[80px] h-[80px]" src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazing.svg" alt="" />
                  <div className="text-xs text-white flex justify-center items-center">مشاهده همه <Icon icon={ic_keyboard_arrow_left}/></div>
                </a>}
                {loading && 
                <div className="flex flex-col gap-5 justify-center items-center h-full">
                  <Skeleton width={88} count={3}/>
                  <Skeleton width={95} height={95}/>
                </div>}
              </SwiperSlide>
              {home?.AmazingSuggestionP.map((elem) => {
                return (
                  <SwiperSlide className="!w-fit h-full bg-white" id="redSwiper" key={elem.id}>
                    <AmazingSuggestionItems
                      image={elem.image}
                      title={elem.title}
                      oldPrice={elem.oldPrice}
                      newPrice={elem.newPrice}
                      off={elem.off}
                    />
                  </SwiperSlide>
                );
              })}
              {loading && Array(10).fill(0).map((elem) => {
                return (
                  <SwiperSlide className="!w-fit h-full bg-white px-3 py-4" id="redSwiper" key={elem.id}>
                    <Skeleton width={132} height={132} />
                    <div className="flex justify-between pt-2"><Skeleton width={30}/><Skeleton width={70}/></div>
                    <div className="text-left"><Skeleton width={40} height={10}/></div>
                    <Skeleton height={5}/>
                  </SwiperSlide>
                );
              })}
              {home && <SwiperSlide className="lg:w-[160px] !w-[130px] h-full ml-3">
                <a href="" className="flex flex-col items-center gap-2 justify-center h-full bg-white rounded-l-[10px]">
                    <div className="w-[50px] h-[50px] flex justify-center items-center outline outline-[#19bfd3] outline-2 rounded-full">
                        <Icon className="text-[#19bfd3]" icon={arrowLeft} size={30}/>
                    </div>
                    <span className="text-gray-800 text-sm">مشاهده همه</span>
                </a>
              </SwiperSlide>}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default AmazingSuggestion;
