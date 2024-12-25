import Icon from "react-icons-kit";
import { arrow_up } from "react-icons-kit/ikons/arrow_up";
import FooterSectionWithButton from "./FooterSectionWithButton.tsx";
import ReadMore from "./ReadMore.tsx";
import FooterListsBar from "./FooterListsBar.tsx";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchFooter } from "../../Redux/Posts/FooterReducer";
import {instagram} from 'react-icons-kit/icomoon/instagram'
import { AppDispatch, RootState } from "../../Redux/Store";

const Footer:React.FC = () => {
  const {footer, loading, error} = useSelector((state:RootState)=>state.footer)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(()=>{
        dispatch(fetchFooter())
  },[])

  return (
    <>
      <footer>
        <hr className="lg:block hidden" />

        <div className="lg:block hidden">
          <div className="flex justify-center px-4">
            <div className="max-w-[1636px] w-full flex justify-between mt-5">
              <div>
                <img
                  className="h-[30px]"
                  src="https://www.digikala.com/brand/full-horizontal.svg"
                  alt=""
                />
              </div>
              <a
                className="text-gray-400 text-xs flex gap-2 w-fit items-center border px-4 py-2 rounded-lg border-gray-300"
                href=""
                target="_top"
              >
                بازگشت به بالا
                <Icon icon={arrow_up} size={20} />
              </a>
            </div>
          </div>

          <div className="flex justify-center px-4">
            <div className="py-3 flex gap-5 text-gray-700 max-w-[1636px] w-full">
              {footer?.contactUs.map((elem) => {
                return (
                  <p className="text-xs" key={elem.id}>
                    {elem.text}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center px-4">
            <div className="flex py-7 max-w-[1636px] w-full">
              {footer?.digikalaAdvantages.map((elem,i) => {
                return (
                  <div key={i} className="text-xs text-gray-700 flex-1 flex flex-col items-center">
                    <img className="w-14 h-14" src={elem.img} alt="" />
                    <h4>{elem.text}</h4>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center p-4">
            <div className="flex max-w-[1636px] w-full">
              <div className="flex w-full">
                {footer?.footerLists.map((elem) => {
                  return (
                    <div className="flex flex-col gap-4 flex-1" key={elem.id}>
                      <h3 className="text-gray-600 font-semibold">
                        {elem.title}
                      </h3>
                      {elem.lists.map((elem2,i) => {
                        return (
                          <a className="text-sm text-gray-500" key={i} href="">
                            {elem2.text}
                          </a>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col gap-3">
                <h4>همراه ما باشید!</h4>
                <div className="flex gap-8">
                  {footer?.socialMedia.map((elem) => {
                    return (
                      <a
                        className="w-[40px] h-[40px] text-gray-300 block"
                        href=""
                        key={elem.id}
                      >
                        <Icon icon={instagram} size={40}/>
                      </a>
                    );
                  })}
                </div>
                <h4>با ثبت ایمیل، از جدیدترین تخفیف‌ها باخبر شوید</h4>
                <form className="flex gap-2" action="">
                  <input
                    className="bg-gray-100 text-gray-100 flex-1 p-3 rounded-md w-[260px]"
                    type="text"
                    placeholder="ایمیل شما"
                  />
                  <button className="bg-gray-300 text-white px-3 rounded-md">
                    ثبت
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="flex justify-center p-4">
            <div className="bg-[#3C4B6D] rounded-xl max-w-[1636px] w-full px-4 py-3 flex justify-between items-center">
              <div className="text-white flex items-center gap-5 text-xl">
                <img
                  className="w-[44px] h-[44px]"
                  src="https://www.digikala.com/statics/img/png/footerlogo2.webp"
                  alt=""
                />
                دانلود اپلیکیشن دیجی‌کالا
              </div>
              <div className="flex gap-5">
                {footer?.downloadApp.map((elem) => {
                  return (
                    <a href="" key={elem.id}>
                      <img
                        className="h-[44px] bg-white rounded-md"
                        src={elem.img}
                        alt=""
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <hr />

          <div className="flex justify-center p-4">
            <div className="flex py-10 gap-5 max-w-[1636px] w-full">
              {footer && <ReadMore
                info={footer.info}
                titleSize="text-2xl"
                infoSize="text-xs"
              />}
              <div className="flex gap-5">
                {footer?.readMoreBrands.map((elem) => {
                  return (
                    <div
                      className="p-4 border border-gray-300 rounded-md w-fit h-fit"
                      key={elem.id}
                    >
                      <img
                        className="w-[75px] h-[75px]"
                        src={elem.img}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <hr />

          <div className="py-9 text-xs text-center text-gray-500">
            برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
            کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه
            (فروشگاه آنلاین دیجی‌کالا) است.
          </div>

          <div className="flex">
            {footer?.digiBrands.map((elem) => {
              return (
                elem.id <= 8 && (
                  <div key={elem.id} className="flex-1 flex justify-center bg-gray-200 py-7 border-b border-r border-gray-300">
                    <img className="h-[20px]" src={elem.img} alt="" />
                  </div>
                )
              );
            })}
          </div>
          <div className="flex">
            {footer?.digiBrands.map((elem) => {
              return (
                elem.id > 8 && (
                  <div key={elem.id} className="flex-1 flex justify-center bg-gray-200 py-7 border-b border-r border-gray-300">
                    <img className="h-[20px]" src={elem.img} alt="" />
                  </div>
                )
              );
            })}
          </div>
        </div>
        <div className="lg:hidden block px-4 pb-24">
          <a
            className="text-cyan-500 text-xs flex gap-2 justify-center text-center w-full py-2"
            href=""
            target="_top"
          >
            بازگشت به بالا
            <Icon icon={arrow_up} size={15} />
          </a>
          <FooterSectionWithButton
            img="https://cdn-icons-png.flaticon.com/512/69/69890.png"
            miniTitle="۷ روز هفته، ۲۴ ساعت"
            mainTitle="تماس با پشتیبانی"
            btnText="تماس"
            btnColor="bg-white text-black"
          />
          <hr />
          <FooterSectionWithButton
            img="	https://www.digikala.com/statics/img/png/footerlogo2.webp"
            miniTitle="۷ روز هفته، ۲۴ ساعت"
            mainTitle="تماس با پشتیبانی"
            btnText="دانلود"
            btnColor="bg-black text-white"
          />
          <hr />
          {footer?.footerLists.map((elem) => {
            return <FooterListsBar title={elem.title} lists={elem.lists} key={elem.id} />;
          })}
          <FooterListsBar title="شرکای تجاری" brands={footer?.digiBrands} />
          {footer && <ReadMore
            info={footer.info}
            titleSize="text-xs"
            infoSize="text-[10px]"
          />}
        </div>
      </footer>
    </>
  );
};

export default Footer;
