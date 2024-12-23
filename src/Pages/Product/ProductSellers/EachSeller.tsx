import Icon from "react-icons-kit";
import { shop } from "react-icons-kit/ikons/shop";
import { ic_verified_user_outline } from "react-icons-kit/md/ic_verified_user_outline";
import { u1F69A } from "react-icons-kit/noto_emoji_regular/u1F69A";
import { u2734 } from "react-icons-kit/noto_emoji_regular/u2734";
import PriceWithToman from "../../../Components/PriceWithToman/PriceWithToman";

const EachSeller = ({data}) => {
  return (
    <div className="p-5 flex flex-col gap-4 odd:bg-white even:bg-gray-50 rounded-xl">
      <div className="flex justify-between">
        <div className="flex-1 grid grid-cols-3">
          <div className="leading-loose flex gap-5">
            <div>
              <Icon icon={shop} size={25} className="text-gray-700" />
            </div>
            <div>
              <p>{data.title}</p>
              <p className="text-xs flex gap-1 text-gray-600">
                <p className="text-green-600"> {data.satisfaction}% </p>
                رضایت از کالا | عملکرد
                <p className="text-green-600">{data.performance}</p>
              </p>
            </div>
          </div>
          <div className="flex text-xs items-center">
            {data?.days > 0 ? (
              <p className="text-gray-500">
                <Icon className="text-gray-700" icon={u1F69A} size={25} />
                ارسال دیجی‌کالا از {"۱"} روز کاری دیگر
              </p>
            ) : (
              <div className="text-gray-500">
                <p>
                  <Icon className="text-gray-700" icon={u1F69A} size={25} />{" "}
                  ارسال دیجی‌کالا
                </p>
                <p>ارسال امروز (فعلا در شهر تهران و کرج)</p>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Icon icon={ic_verified_user_outline} size={25} />
            <p className="text-sm">{data.guarantee}</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <PriceWithToman price={data.price} textSize={"text-xl"} />
          <button className="bg-rose-500 rounded-lg px-4 py-2 h-fit leading-loose text-xs text-white">
            افزودن به سبد
          </button>
        </div>
      </div>
      {data?.plusService && (
        <div className="text-xs bg-gradient-to-l from-pink-100 to-transparent max-w-[400px] p-2 rounded-lg mr-10">
          <span className="text-purple-600 font-bold">
            <Icon icon={u2734} size={20} />
            خدمات پلاس{" "}
          </span>
          <span className="text-gray-500">
            ارسال فوری برای شهر تهران و کرج (رایگان)
          </span>
        </div>
      )}
    </div>
  );
};

export default EachSeller;
