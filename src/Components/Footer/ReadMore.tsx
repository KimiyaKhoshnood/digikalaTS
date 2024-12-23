import React, { useState } from "react";
import BlueLinkWithLeftArrow from "../BlueLinkWithLeftArrow/BlueLinkWithLeftArrow.tsx";

type readMoreProp = {
  info: string[]
  titleSize: string
  infoSize: string
}

const ReadMore:React.FC<readMoreProp> = ({ info, titleSize, infoSize }) => {
  const [readMore, setReadMore] = useState(false);
  const [readMoreBtn, setReadMoreBtn] = useState("مشاهده بیشتر");

  const ReadMoreBtnFunc = () => {
    setReadMore(!readMore);
    readMore ? setReadMoreBtn("مشاهده بیشتر") : setReadMoreBtn("بستن");
  };

  return (
    <div className="flex-1 py-3">
      <div className="">
        <h1 className={`${titleSize} text-gray-600 leading-loose`}>
          <strong>
            فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین
          </strong>
        </h1>
        <div id={readMore ? "" : "textOpacity"}>
          {readMore ? (
            info?.map((elem) => {
              return (
                <p className={`${infoSize} text-gray-500 leading-loose`}>
                  {elem}
                </p>
              );
            })
          ) : (
            <p
              className={`${infoSize} text-gray-500 leading-loose line-clamp-3`}
            >
              {info && info[0]}
              <br />
              {info && info[1]}
            </p>
          )}
        </div>
      </div>
      <BlueLinkWithLeftArrow
        text={readMoreBtn}
        size={"text-xs"}
        functionBtn={ReadMoreBtnFunc}
      />
    </div>
  );
};

export default ReadMore;
