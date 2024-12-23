import React from 'react'
import Icon from 'react-icons-kit'
import { shop } from 'react-icons-kit/ikons/shop'
import PriceWithToman from '../../../Components/PriceWithToman/PriceWithToman'
import { ic_verified_user_outline } from 'react-icons-kit/md/ic_verified_user_outline'
import { u1F69A } from 'react-icons-kit/noto_emoji_regular/u1F69A'
import { u23F0 } from 'react-icons-kit/noto_emoji_regular/u23F0'
import { arrow_left } from 'react-icons-kit/ikons/arrow_left'
import {ic_announcement_outline} from 'react-icons-kit/md/ic_announcement_outline'

const LeftGrayBox = ({data}) => {
  return (
    <div className="w-full lg:max-w-[330px] flex flex-col gap-2">
            <div className="lg:bg-gray-100 min-w-[290px] lg:border border-gray-300 rounded-xl p-4 flex flex-col gap-3">
              <div className="flex justify-between items-center py-1">
                <h3>
                  <strong>فروشنده</strong>
                </h3>
                <span className="text-cyan-400 text-xs">۱۴ فروشنده دیگر</span>
              </div>
              <div className="flex gap-3">
                <div>
                  <Icon icon={shop} size={25} />
                </div>
                <div className="leading-loose">
                  <p className='lg:text-md text-sm'>{data?.ProductSellers[0].title}</p>
                  <p className="text-xs flex gap-1 text-gray-600 py-2">
                    <p className="text-green-600"> {data?.ProductSellers[0].satisfaction}% </p>
                    رضایت از کالا | عملکرد
                    <p className="text-green-600">{data?.ProductSellers[0].performance}</p>
                  </p>
                </div>
              </div>
              <hr className='lg:block hidden' />
              <div className="lg:flex hidden items-center justify-between">
                <div className="flex justify-center items-center text-[11px] w-[16px] h-[16px] pt-[2px] border border-gray-600 rounded-full">
                  i
                </div>
                <PriceWithToman price={data?.ProductSellers[0].price} textSize={"text-lg font-bold"} />
              </div>
              <span className="lg:block hidden text-xs text-sky-700">{"۱۰+ هزار بازدید در ۲۴ ساعت اخیر"}</span>
              <button className="lg:block hidden bg-rose-500 text-white w-full py-3 rounded-lg text-xs">افزودن به سبد</button>
              <div className="flex items-center gap-2 text-gray-800">
                <Icon icon={ic_verified_user_outline} size={22} />
                <p className="text-xs pt-1">{data?.ProductSellers[0].guarantee}</p>
              </div>
              <hr />
              <div className="text-gray-500 text-xs flex justify-between">
                <div>
                    <p><Icon className="text-rose-600" icon={u1F69A} size={20}/>&nbsp;ارسال دیجی‌کالا</p>
                    {data?.ProductSellers[0].plusService && <p><Icon className="text-blue-700" icon={u23F0} size={20}/>&nbsp;ارسال امروز (فعلا در شهر تهران و کرج)</p>}
                </div>
                <Icon icon={arrow_left}/>
              </div>
              <hr />
              <div className="flex items-center gap-3">
                <img className="w-7" src="https://www.digikala.com/statics/img/svg/club-point.svg" alt="" />
                <p className="text-gray-800 text-xs">۱۵۰ امتیاز دیجی‌کلاب</p>
                <div className="flex justify-center items-center text-[11px] w-[16px] h-[16px] border border-gray-600 text-gray-500 rounded-full">
                  i
                </div>
              </div>
            </div>
            <hr className='lg:hidden block'/>
            <div className="flex lg:hidden gap-3 py-1">
                <div className="p-1">
                    <div className="flex justify-center items-center text-[11px] w-[14px] h-[14px] bg-gray-400 text-white rounded-full pt-[2px]">
                    i
                    </div>
                </div>
                <p className="text-[11px] text-gray-500 leading-loose">امکان برگشت کالا در گروه موبایل با دلیل "انصراف از خرید" تنها در صورتی مورد قبول است که پلمب کالا باز نشده باشد.
                تمام گوشی‌های دیجی‌کالا ضمانت رجیستری دارند. در صورت وجود مشکل رجیستری، می‌توانید بعد از مهلت قانونی ۳۰ روزه، گوشی خریداری‌شده را مرجوع کنید.</p>
            </div>
            <p className='text-left text-gray-500 text-[11px] p-2 cursor-pointer lg:hidden block'>گزارش نادرستی مشخصات<Icon className='px-1' icon={ic_announcement_outline}/></p>
            <div className='lg:hidden block w-full h-1 bg-gray-100'></div>
            <div className="flex justify-between text-xs text-gray-500 px-4 lg:py-3 py-1 rounded-md lg:border border-gray-300">
                <div className="flex gap-1">
                  <div className="flex justify-center items-center text-[11px] w-[16px] h-[16px] border border-gray-600 text-gray-500 rounded-full">
                  i
                  </div>
                  <p>فرآیند قیمت‌گذاری و نظارت بر قیمت</p>
                </div>
                <Icon icon={arrow_left} />
            </div>
            <div className="lg:hidden flex flex-col gap-2 bg-gray-100 p-4">
              <div className="bg-white lg:hidden flex rounded-lg items-center justify-between px-4">
                <span className="text-sm">ارسال رایگان برای این کالا</span>
                <div><img className="h-[60px]" src="https://www.digikala.com/_next/static/media/normalFreeShippingTouchPointImage.d4416515.svg" alt="" /></div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="flex justify-between text-sm pb-3">
                    <div className="flex items-center gap-2">
                        <div className="bg-blue-800 w-4 h-4"></div>
                        <span className="text-sm">خرید این کالا با تسهیلات دیجی‌پی</span>
                    </div>
                    <Icon icon={arrow_left} />
                </div>
                <div className="text-gray-400 leading-loose flex gap-1">
                    <div className="flex flex-col items-center px-1">
                        <div className="border w-[1px] bg-gray-500 flex-1"></div>
                        <div className="bg-blue-800 w-[6px] h-[6px] rounded-sm"></div>
                        <div className="border w-[1px] bg-gray-500 flex-1"></div>
                    </div>
                    <h3 className="text-[11px]">فقط با ماهی ۴,۷۰۳,۸۰۰ تومان (۱۲ ماه)</h3>
                </div>
                <div className="text-gray-400 leading-loose flex gap-1">
                    <div className="flex flex-col items-center px-1">
                        <div className="border w-[1px] bg-gray-500 flex-1"></div>
                        <div className="bg-blue-800 w-[6px] h-[6px] rounded-sm"></div>
                        <div className="border w-[1px] bg-gray-500 flex-1"></div>
                    </div>
                    <h3 className="text-[11px]">فقط با ماهی ۴,۷۰۳,۸۰۰ تومان (۱۲ ماه)</h3>
                </div>
              </div>
          </div>
          </div>
  )
}

export default LeftGrayBox