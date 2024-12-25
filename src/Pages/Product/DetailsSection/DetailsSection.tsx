import Icon from "react-icons-kit";
import DetailsSectionNav from "./DetailsSectionNav";
import { shop } from "react-icons-kit/ikons/shop";
import { ic_verified_user_outline } from "react-icons-kit/md/ic_verified_user_outline";
import { checkSquare } from "react-icons-kit/feather/checkSquare";
import PriceWithToman from "../../../Components/PriceWithToman/PriceWithToman";
import TopicWithRedLine from "../TopicWithRedLine/TopicWithRedLine";
import BlueLinkWithLeftArrow from "../../../Components/BlueLinkWithLeftArrow/BlueLinkWithLeftArrow";
import React, { useEffect, useState } from "react";
import { sortAmountDesc } from "react-icons-kit/icomoon/sortAmountDesc";
import Reviews from "./Reviews";
import Rating from "./Rating";
import { ic_help_center_outline } from "react-icons-kit/md/ic_help_center_outline";
import { ic_thumb_up_outline } from "react-icons-kit/md/ic_thumb_up_outline";
import { ic_thumb_down_outline } from "react-icons-kit/md/ic_thumb_down_outline";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../../Redux/Posts/ProductReducer";
import { arrow_left } from "react-icons-kit/ikons/arrow_left";
import {ic_forum} from 'react-icons-kit/md/ic_forum'
import { AppDispatch, RootState } from "../../../Redux/Store";

const DetailsSection:React.FC = () => {

  const { product, loading, error } = useSelector((state:RootState) => state.product);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchProduct(""));
    }, 1000);
  }, []);

  const [readMore, setReadMore] = useState<boolean>(false);
  const [readMoreBtn, setReadMoreBtn] = useState<"بیشتر"|"بستن">("بیشتر");

  const ReadMoreBtnFunc = ():void => {
    setReadMore(!readMore);
    readMore ? setReadMoreBtn("بیشتر") : setReadMoreBtn("بستن");
  };

  console.log(product);
  

  return (
    <div className="w-full max-w-[1676px] py-4">
      <DetailsSectionNav />
      <div className="flex">
        {/* right */}
        <div className="flex-1">
          {/* introduction */}
          <section className="pt-4 pb-7 px-4" id="introduction">
            <TopicWithRedLine title={"معرفی"} />
            <p
              className={`${
                readMore ? "" : "lg:line-clamp-3 line-clamp-2"
              } lg:text-sm text-xs !leading-loose my-2`}
            >
              {product?.DetailsSectionP.introduction}
            </p>
            <BlueLinkWithLeftArrow
              text={readMoreBtn}
              size={"text-xs"}
              functionBtn={ReadMoreBtnFunc}
            />
          </section>

          <div className="h-1 bg-gray-100"></div>

          <section className="py-5 px-4" id="professional">
            <TopicWithRedLine title={"بررسی تخصصی"} />
            <span className="font-bold py-5 block">معرفی</span>
            <div className="flex lg:flex-row flex-col lg:items-start items-center">
              <p className="lg:text-sm text-xs leading-loose">
                <span className="px-3">&nbsp;</span>
                <span className="leading-loose">
                  {product?.DetailsSectionP.professionalDetails.introduction}
                </span>
              </p>
              <img
                className="w-[340px] h-[340px]"
                src={product?.DetailsSectionP.professionalDetails.img}
                alt=""
              />
            </div>
            <BlueLinkWithLeftArrow
              text={readMoreBtn}
              size={"text-xs"}
              functionBtn={ReadMoreBtnFunc}
            />
          </section>

          <div className="h-1 bg-gray-100"></div>

          <section className="py-5 px-4" id="details">
            <TopicWithRedLine title={"مشخصات"} />
            <div className="flex lg:flex-row flex-col gap-5 py-5 leading-loose">
              <span className="!w-64">مشخصات کلی</span>
              <div className="flex flex-col lg:text-sm text-xs flex-1">
                {product?.DetailsSectionP.tableDetails.map((elem) => {
                  return (
                    <div key={elem.id} className="flex items-center">
                      <p className="text-gray-500 lg:w-[200px] w-[104px]">
                        {elem.title}
                      </p>
                      <p className="border-b py-4 flex-1">{elem.detail}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <BlueLinkWithLeftArrow
              text={readMoreBtn}
              size={"text-xs"}
              functionBtn={ReadMoreBtnFunc}
            />
            <div className="flex items-center lg:text-xs text-[11px] gap-2 py-2 text-gray-500">
              <div className="flex justify-center items-center text-[11px] w-[14px] h-[14px] border border-gray-600 text-gray-500 rounded-full">
                i
              </div>
              <p>
                هشدار سامانه همتا: در صورت انجام معامله، از فروشنده کد فعالسازی
                را گرفته و حتما در حضور ایشان، دستگاه را از طریق #7777*، برای
                سیمکارت خود فعالسازی نمایید. آموزش تصویری در آدرس اینترنتی
                hmti.ir/06
              </p>
            </div>
          </section>

          <div className="h-1 bg-gray-100"></div>

          <section className="py-5 px-4" id="opinions">
            <div className="lg:block hidden">
              <TopicWithRedLine title={"امتیاز و دیدگاه کاربران"} />
            </div>
            <div className="lg:hidden flex justify-between">
              <span className="flex flex-col gap-2">
                <span className="text-sm">دیدگاه‌ها</span>
                <span className="text-[11px] text-gray-500">
                  {product?.rates.comments} دیدگاه
                </span>
              </span>
              <BlueLinkWithLeftArrow
                text={readMoreBtn}
                size={"text-xs"}
                functionBtn={ReadMoreBtnFunc}
              />
            </div>
            <div className="flex gap-5">
              <div className="lg:block hidden w-[260px] sticky top-56">
                <div className="lg:flex hidden flex-col gap-3 py-4 w-[260px] sticky top-56">
                  <div>
                    <span className="text-2xl">
                      {product?.rates.starsPersian}
                    </span>
                    <span className="text-[10px]">{" از ۵ "}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {product && <Rating rate={product.rates.starsEnglish} size={20} />}
                    <span className="text-gray-400 text-[10px] leading-loose">
                      از مجموع {product?.rates.opinions} امتیاز
                    </span>
                  </div>
                  <p className="text-gray-500 text-[11px]">
                    شما هم درباره این کالا دیدگاه ثبت کنید
                  </p>
                  <button className="border border-rose-500 text-rose-500 w-full py-3 rounded-lg text-xs">
                    ثبت دیدگاه
                  </button>
                  <div className="text-gray-500 flex gap-1 leading-loose">
                    <div className="flex justify-center items-center text-[11px] w-[14px] h-[14px] border border-gray-600 text-gray-500 rounded-full">
                      i
                    </div>
                    <p className="text-xs">
                      با ثبت دیدگاه بر روی کالاهای خریداری شده ۵ امتیاز در
                      دیجی‌کلاب دریافت کنید
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="flex gap-8 lg:py-0 py-3">
                  {product?.DetailsSectionP.comments.map((elem) => {
                    return (
                      <img
                        key={elem.id}
                        className="lg:w-[57px] lg:h-[57px] w-[80px] h-[80px] rounded-lg"
                        src={elem.img}
                        alt=""
                      />
                    );
                  })}
                </div>
                <div className="py-5 lg:block hidden">
                  <BlueLinkWithLeftArrow
                    text={readMoreBtn}
                    size={"text-xs"}
                    functionBtn={ReadMoreBtnFunc}
                  />
                </div>
                <div className="lg:block hidden bg-gray-200 h-[1px]"></div>
                <div className="lg:flex hidden justify-between text-xs py-4">
                  <ul className="flex gap-3">
                    <li>
                      <Icon icon={sortAmountDesc} />
                      مرتب سازی:
                    </li>
                    <li className="text-rose-500">جدیدترین</li>
                    <li className="text-gray-500">دیدگاه خریداران</li>
                    <li className="text-gray-500">مفیدترین</li>
                  </ul>
                  <span className="text-gray-500">
                    {product?.rates.comments} دیدگاه
                  </span>
                </div>
                <div className="py-4 border-b lg:block hidden">
                  <span className="font-bold py-4">فیلتر بر اساس موضوع</span>
                  <div className="flex gap-2 py-4">
                    <span className="border rounded-3xl px-4  py-1 leading-loose cursor-pointer text-sm text-gray-700">
                      {"گارانتی "}
                    </span>
                    <span className="border rounded-3xl px-4  py-1 leading-loose cursor-pointer text-sm text-gray-700">
                      {"کیفیت و کارایی "}
                    </span>
                    <span className="border rounded-3xl px-4  py-1 leading-loose cursor-pointer text-sm text-gray-700">
                      {"ابعاد یا سایز "}
                    </span>
                    <span className="border rounded-3xl px-4  py-1 leading-loose cursor-pointer text-sm text-gray-700">
                      {"قیمت و ارزش خرید "}
                    </span>
                    <span className="border rounded-3xl px-4  py-1 leading-loose cursor-pointer text-sm text-gray-700">
                      {"شباهت یا مغایرت "}
                    </span>
                  </div>
                </div>
                <div className="lg:block hidden">
                  {product?.DetailsSectionP.comments.map((elem) => {
                    return <Reviews comment={elem} />;
                  })}
                </div>
                <div className="lg:hidden block w-full">
                  <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={10}
                    freeMode={true}
                    navigation={true}
                    modules={[FreeMode, Navigation]}
                    className="mySwiper w-[90vw]"
                  >
                    {product?.DetailsSectionP.comments.map((elem) => {
                      return (
                        <SwiperSlide
                          className="!w-fit h-full py-4"
                          id="redSwiper"
                          key={elem.id}
                        >
                          <Reviews comment={elem} />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
                <div className="lg:block hidden py-4">
                  <BlueLinkWithLeftArrow
                    text={`${product?.rates.comments} دیدگاه دیگر`}
                    size={"text-xs"}
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="h-1 bg-gray-100"></div>

          <section className="px-4 lg:block" id="questions">
            <div className="flex justify-between items-center">
              <div>
                <TopicWithRedLine title={"پرسش‌ها"} />
              </div>
              <span className="block lg:hidden text-gray-500 text-xs">
                {product?.rates.questions} پرسش
              </span>
            </div>
            <div className="flex gap-5">
              <div className="lg:block hidden gap-3 py-4 w-[260px]">
                <div className="flex flex-col gap-3 py-4 sticky top-56">
                  <p className="text-gray-500 text-[11px]">
                    شما هم درباره این کالا پرسش ثبت کنید
                  </p>
                  <button className="border border-rose-500 text-rose-500 w-full py-3 rounded-lg text-xs">
                    ثبت پرسش
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <div className="lg:flex hidden justify-between text-xs py-4">
                  <ul className="flex gap-3">
                    <li>
                      <Icon icon={sortAmountDesc} />
                      مرتب سازی:
                    </li>
                    <li className="text-rose-500">جدیدترین</li>
                    <li className="text-gray-500">بیشترین پاسخ</li>
                  </ul>
                  <span className="text-gray-500">
                    {product?.rates.questions} پرسش
                  </span>
                </div>
                <div className="">
                  <div className="lg:block hidden">
                    {product?.DetailsSectionP.questions.map((elem) => {
                      return (
                          <div key={elem.id} className="lg:block hidden border-b-2">
                            <div className="border-b py-1">
                              <div className="flex items-center gap-4">
                                <Icon
                                  className="text-cyan-400"
                                  icon={ic_help_center_outline}
                                  size={25}
                                />
                                <p className="text-[15px] py-5">
                                  {elem.question}
                                </p>
                              </div>
                              {elem.answer ? (
                                <>
                                  <div className="flex gap-4">
                                    <span className="text-[11px] text-gray-500 py-3">
                                      پاسخ{" "}
                                    </span>
                                    <div className="flex flex-col leading-loose py-3 gap-1">
                                      <span className="text-sm text-gray-600">
                                        {elem.answer.answer}
                                      </span>
                                      <span className="text-[11px] text-gray-400">
                                        <span>{elem.answer.user} </span>
                                        <span className="bg-green-100 text-green-800 py-[2px] px-2 rounded-xl">
                                          {elem.answer.tag}{" "}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex justify-end items-center gap-2 text-gray-400">
                                    <span className="text-xs pl-10">
                                      آیا این پاسخ مفید بود؟
                                    </span>
                                    <span>{elem.answer.like}</span>
                                    <Icon
                                      className=""
                                      icon={ic_thumb_up_outline}
                                    />
                                    <span>{elem.answer.dislike}</span>
                                    <Icon icon={ic_thumb_down_outline} />
                                  </div>
                                </>
                              ) : null}
                            </div>
                            <div className="text-xs p-6">
                              <BlueLinkWithLeftArrow text={"ثبت پاسخ"}  size={"text-xs"}/>
                            </div>
                          </div>
                      );
                    })}
                  </div>
                  <div className="lg:hidden block h-[230px]">
                    <Swiper
                      slidesPerView={"auto"}
                      spaceBetween={10}
                      freeMode={true}
                      navigation={true}
                      modules={[FreeMode, Navigation]}
                      className="mySwiper w-[90vw] h-full"
                    >
                      {product?.DetailsSectionP.questions.map((elem) => {
                        return (
                          <SwiperSlide
                            className="!w-fit h-full py-1 lg:border flex flex-col "
                            key={elem.id}
                          >
                            <div className="w-[270px] lg:border-b-2 border rounded-lg flex flex-col justify-between h-full">
                              <div className="border-b py-1 text-xs leading-relaxed w-full h-full">
                                <div className="flex items-center lg:gap-4 gap-2 px-2">
                                  <Icon
                                    className="text-cyan-400"
                                    icon={ic_help_center_outline}
                                    size={25}
                                  />
                                  <p className="lg:text-[15px] text-sm py-5">
                                    {elem.question}
                                  </p>
                                </div>
                                {elem.answer ? (
                                  <>
                                    <div className="flex gap-4 px-2">
                                      <span className="text-[11px] text-gray-500 py-3">
                                        پاسخ{" "}
                                      </span>
                                      <div className="flex flex-col leading-loose py-3 gap-1">
                                        <span className="text-sm text-gray-600">
                                          {elem.answer.answer}
                                        </span>
                                        <span className="text-[11px] text-gray-400">
                                          <span>{elem.answer.user} </span>
                                          <span className="bg-green-100 text-green-800 py-[2px] px-2 rounded-xl">
                                            {elem.answer.tag}{" "}
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                  </>
                                ) : null}
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                  <span className="py-2 lg:block hidden">
                    <BlueLinkWithLeftArrow
                      text={`${product?.rates.questions} پرسش دیگر`}
                      size={"text-xs"}
                    />
                  </span>                 
                </div>
              </div>
            </div>
            <div className="flex justify-between text-xs py-4">
              <span><Icon icon={ic_forum}/> پرسش و پاسخ</span>
              <span><Icon icon={arrow_left}/></span>
            </div>
          </section>
          
          <div className="h-2 bg-gray-100"></div>
        </div>
        {/* left */}
        <div className="p-5 xl:block hidden">
          <div className="flex flex-col gap-3 border border-gray-200 bg-gray-100 rounded-xl p-4 text-xs leading-loose max-w-[300px] sticky top-56">
            <div className="flex gap-2">
              <div>
                <img className="w-20 h-20" src={product?.image} alt="" />
              </div>
              <div className="flex-1 flex flex-col justify-between py-[2px]">
                <p className="line-clamp-2">{product?.productName}</p>
                <div className="flex gap-2 items-center">
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                  <p>{product?.selected.color}</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="text-gray-600 flex flex-col gap-2">
              <span className="flex gap-2">
                <Icon className="text-gray-700" icon={shop} />
                <span>{product?.ProductSellers[0].title}</span>
              </span>
              <span className="flex gap-2">
                <Icon
                  className="text-gray-700"
                  icon={ic_verified_user_outline}
                />
                <span>{product?.ProductSellers[0].guarantee}</span>
              </span>
              {product?.available ? (
                <span className="flex gap-2">
                  <Icon className="text-cyan-500" icon={checkSquare} />
                  <span>موجود در انبار دیجی‌کالا</span>
                </span>
              ) : null}
            </div>
            <div className="flex justify-end">
              {product && <PriceWithToman
                price={product.ProductSellers[0].price}
                textSize={"text-lg font-bold"}
              />}
            </div>
            <span className="text-xs text-sky-700">
              {"۱۰+ هزار بازدید در ۲۴ ساعت اخیر"}
            </span>
            <button className="bg-rose-500 text-white w-full py-3 rounded-lg text-xs">
              افزودن به سبد
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
