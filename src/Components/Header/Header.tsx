import Icon from "react-icons-kit";
import { ic_search } from "react-icons-kit/md/ic_search";
import { shoppingCart } from "react-icons-kit/feather/shoppingCart";
import { login } from "react-icons-kit/ikons/login";
import NavbarItems from "./NavbarItems";
import { bars } from "react-icons-kit/fa/bars";
import { ic_local_fire_department } from "react-icons-kit/md/ic_local_fire_department";
import { location } from "react-icons-kit/oct/location";
import {ic_shopping_cart_outline} from 'react-icons-kit/md/ic_shopping_cart_outline'
import {ic_perm_identity_outline} from 'react-icons-kit/md/ic_perm_identity_outline'
import {ic_tour_outline} from 'react-icons-kit/md/ic_tour_outline'
import {ic_category_outline} from 'react-icons-kit/md/ic_category_outline'
import {home} from 'react-icons-kit/typicons/home'
import { percent } from "react-icons-kit/fa/percent";
import { x } from "react-icons-kit/oct/x";
import { basket } from "react-icons-kit/ikons/basket";
import { tags } from "react-icons-kit/ikons/tags";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeader } from "../../Redux/Posts/HeaderReducer";
import { Link, NavLink } from "react-router-dom";
import { fetchUser } from "../../Redux/Posts/UserReducer";
import { arrow_left } from "react-icons-kit/ikons/arrow_left";
import { AppDispatch, RootState } from "../../Redux/Store";

const Header = () => {
  let NavbarItemsP = {
    productSorting: {
      text: "دسته‌بندی کالاها",
      icon: bars,
      size: "text-md",
      id: 1,
    },
    digikalaPagesNavbar: [
      {
        text: "شگفت‌انگیزها",
        icon: bars,
        color: "text-gray-500",
        size: "text-xs",
        id: 2,
      },
      {
        text: "سوپرمارکت",
        icon: basket,
        color: "text-gray-500",
        size: "text-xs",
        id: 3,
      },
      {
        text: "کارت هدیه",
        icon: percent,
        color: "text-gray-500",
        size: "text-xs",
        id: 4,
      },
      {
        text: "پرفروش‌ترین‌ها",
        icon: ic_local_fire_department,
        color: "text-gray-500",
        size: "text-xs",
        id: 5,
      },
      {
        text: "تخفیف‌ها و پیشنهادها",
        icon: tags,
        color: "text-gray-500",
        size: "text-xs",
        id: 6,
      },
    ],
    locationNavbar: {
      text: "لطفا شهر خود را انتخاب کنید",
      color: "text-gray-800",
      icon: location,
      size: "text-xs",
    },
  };


  const [indexOfHover, setIndexOfHover] = useState(0);

  const { header, loading , error } = useSelector((state:RootState) => state.header);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchHeader());
    }, 1000);
  }, []);

  const { user, loadingUser, errorUser } = useSelector((state:RootState) => state.user);
  const dispatch2 = useDispatch<AppDispatch>();
  useEffect(() => {
    setTimeout(() => {
      dispatch2(fetchUser());
    }, 1000);
  }, []);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-20 bg-white">
        <div className="">
          <a href="" className="w-full lg:h-[60px] h-[35px] block">
            <img
              className="h-full object-cover"
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/2d75d44c81aa9afea6488551dab1a3725f2d6cee_1727184968.gif?x-oss-process=image"
              alt=""
            />
          </a>
        </div>
        <div className="h-[68px] lg:flex hidden items-center justify-between px-5">
          <div className="flex items-center gap-4">
            <div>
              <img
                className="h-[30px]"
                src="https://www.digikala.com/brand/full-horizontal.svg"
                alt=""
              />
            </div>
            <div className="bg-[#F0F0F1] w-[600px] h-[44px] rounded-lg px-3">
              <Icon className="text-gray-400" icon={ic_search} size={27} />
              <input
                type="text"
                placeholder="جستجو"
                className="bg-transparent focus:outline-none h-full text-xs text-gray-500 pr-3"
              />
            </div>
          </div>
          <div className="flex items-center h-fit gap-4">
            {/* ???????????????? */}
            {!user ? (
              <button className="h-[40px] flex items-center gap-1 px-5 border border-gray-300 rounded-lg text-xs font-semibold">
                <Icon
                  icon={login}
                  size={22}
                  className="text-gray-600 -scale-x-100"
                />
                {"خروج از حساب"}
              </button>
            ) : (
              <Link
                to={{ pathname: "/login" }}
                className="h-[40px] flex items-center gap-1 px-5 border border-gray-300 rounded-lg text-xs font-semibold"
              >
                <Icon
                  icon={login}
                  size={22}
                  className="text-gray-600 -scale-x-100"
                />
                {"ورود | ثبت‌نام"}
              </Link>
            )}
            <div className="w-[1px] bg-gray-400 h-[30px]"></div>
            <Icon
              icon={shoppingCart}
              size={25}
              className="text-gray-600 -scale-x-100"
            />
          </div>
        </div>
        <div className="px-3 flex lg:hidden flex-col gap-2 py-2">
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <Icon icon={x} className="text-gray-500"></Icon>
              <img
                className="w-[32px] h-[32px]"
                src="https://www.digikala.com/statics/img/png/Logo.webp"
                alt=""
              />
              <span>اپلیکیشن دیجی‌کالا</span>
            </div>
            <a
              className="h-[36px] px-3 rounded-lg flex items-center bg-black text-white text-[12px]"
              href=""
            >
              نصب
            </a>
          </div>
          <div className="w-full h-[40px] bg-[#F0F0F1] rounded-3xl flex gap-2 items-center px-2">
            <Icon className="text-gray-400" icon={ic_search} size={27} />
            <span className="text-gray-400 text-sm">جستجو در </span>
            <img
              className="h-[16px]"
              src="https://www.digikala.com/brand/typography.svg"
              alt=""
            />
          </div>
        </div>
        {header ? (
          <nav className="h-[40px] lg:flex hidden justify-between px-2">
            <div className="flex gap-2">
              <div
                id="submenu"
                className="border-b-2 border-b-transparent hover:border-b-red-500 transition-all duration-300 ease-linear origin-right"
              >
                <NavbarItems
                  icon={NavbarItemsP?.productSorting.icon}
                  text={header?.productSorting.text}
                  size={"text-md"}
                  color={""}
                />
                {/* submenu for real */}
                <div className="hidden fixed top-[168px] z-10 border xl:w-[1100px] w-[1000px] h-[70vh] shadow-lg bg-white rounded-bl-lg">
                  <div dir="ltr" className="overflow-y-scroll w-[250px] h-full">
                    {header?.submenu.map((elem, i) => {
                      return (
                        <div
                          dir="rtl"
                          key={elem.id}
                          onMouseEnter={() => setIndexOfHover(i)}
                          className={`${
                            i == indexOfHover
                              ? "bg-white text-rose-600"
                              : "bg-gray-100"
                          } px-2 py-4 text-xs cursor-pointer`}
                        >
                          {elem.title}
                        </div>
                      );
                    })}
                  </div>
                  <div
                    dir="ltr"
                    className="w-full overflow-y-scroll text-xs bg-white rounded-bl-lg"
                  >
                    {header?.submenu.map((section, i) => {
                      return (
                        <div
                          dir="rtl"
                          key={section.id}
                          className={`${false ? "hidden" : ""} ${
                            i == indexOfHover ? "flex" : "hidden"
                          } w-full py-5 flex-col`}
                        >
                          <h3 className="py-2 text-cyan-600 cursor-pointer">
                            همه محصولات {section.title}
                            <Icon icon={arrow_left} />
                          </h3>
                          <div className="flex flex-col flex-wrap max-h-[1300px]">
                            {section.categories.map((column) => {
                              return (
                                <div key={column.id} className="h-fit">
                                  <span className="text-sm block py-3 hover:text-rose-700 cursor-pointer">
                                    <span className="px-1 text-red-600 font-extrabold">
                                      |
                                    </span>
                                    {column.title}
                                  </span>
                                  <div className="flex flex-col">
                                    {column?.items.map((items,i) => {
                                      return (
                                        <span key={i} className="px-1 py-2 text-gray-500 hover:text-rose-700 cursor-pointer">
                                          {" "}
                                          {items}{" "}
                                        </span>
                                      );
                                    })}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="text-gray-300 mt-2">|</div>
              <div className="flex">
                {NavbarItemsP?.digikalaPagesNavbar.map((elem, index) => {
                  return (
                    (index < 4 || width > 1280) && (
                      <div
                        key={index}
                        className="border-b-2 border-b-transparent hover:border-b-red-500 transition-all duration-300 ease-linear origin-right"
                      >
                        <NavbarItems
                          icon={elem.icon}
                          text={elem.text}
                          color={"text-gray-500"}
                          size={"text-xs"}
                        />
                      </div>
                    )
                  );
                })}
              </div>
              <div className="text-gray-300 mt-2">|</div>
              <div className="flex">
                {header?.digikalaQuestionsNavbar.map((elem, index) => {
                  return (
                    <div
                      key={index}
                      className="border-b-2 border-b-transparent hover:border-b-red-500 transition-all duration-1000"
                    >
                      <NavbarItems
                        icon={""}
                        text={elem.text}
                        color={"text-gray-500"}
                        size={"text-xs"}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-orange-50 rounded-3xl h-fit pb-2">
              <NavbarItems
                icon={NavbarItemsP?.locationNavbar.icon}
                text={header?.locationNavbar.text}
                size={"text-xs"}
                color={"text-orange-600"}
              />
            </div>
          </nav>
        ) : <div className="h-10"></div>}
        <hr />
      </header>

      <nav className="fixed z-10 bottom-0 w-full bg-white py-2 lg:hidden grid grid-cols-5 text-[10px] shadow-2xl">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-black flex flex-col items-center" : "text-gray-500 flex flex-col items-center"
          }
          to={{ pathname: "/" }}
        >
          <Icon icon={home} size={25}/>
          <span>خانه</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-black flex flex-col items-center" : "text-gray-500 flex flex-col items-center"
          }
          to={{ pathname: "/product" }}>
          <Icon icon={ic_category_outline} size={25}/>
          <span>دسته‌بندی</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-black flex flex-col items-center" : "text-gray-500 flex flex-col items-center"
          }
          to={{ pathname: "/product" }}>
          <Icon icon={ic_shopping_cart_outline} size={25} />
          <span>سبد خرید</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-black flex flex-col items-center" : "text-gray-500 flex flex-col items-center"
          }
          to={{ pathname: "/product" }}>
          <Icon icon={ic_tour_outline} size={25} />
          <span>مگنت</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-black flex flex-col items-center" : "text-gray-500 flex flex-col items-center"
          }
          to={{ pathname: "/product" }}>
          <Icon icon={ic_perm_identity_outline} size={25} />
          <span>دیجی‌کالای من</span>
        </NavLink>
      </nav>
    </>
  );
};

export default Header;
