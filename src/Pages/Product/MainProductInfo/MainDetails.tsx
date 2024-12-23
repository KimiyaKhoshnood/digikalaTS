import React, { useState } from 'react'
import Icon from 'react-icons-kit'
import { androidStar } from 'react-icons-kit/ionicons/androidStar'
import OffPercent from '../../../Components/OffPercent/OffPercent'
import LineThroughPrice from '../../../Components/LineThroughPrice/LineThroughPrice'
import PriceWithToman from '../../../Components/PriceWithToman/PriceWithToman'
import BlueLinkWithLeftArrow from '../../../Components/BlueLinkWithLeftArrow/BlueLinkWithLeftArrow'
import { arrow_left } from 'react-icons-kit/ikons/arrow_left'
import {ic_done} from 'react-icons-kit/md/ic_done'

const MainDetails = ({data}) => {
    let temp = ["bg-[#F472B6]", "bg-[#000000]"]
    const [checked, setchecked] = useState(0)
  return (
    <>
    <div className="lg:w-fit w-full flex flex-col gap-4 px-4">
            <div className="text-gray-400 flex items-center">
              <span className="text-wrap text-xs flex-1">
                {data?.englishName}
              </span>
            </div>

            <div className="flex items-center lg:text-xs text-[10px] gap-2">
              <Icon className="text-yellow-400" icon={androidStar} size={20} />
              <p className="text-gray-700">{data?.rates.starsPersian}</p>
              <p className="text-gray-400">{`(امتیاز ${data?.rates.voterStar} خریدار)`}</p>
              <div className="lg:block hidden w-1 h-1 bg-slate-300 rounded-full"></div>
              <p className="lg:text-cyan-400 lg:bg-transparent text-gray-800 bg-gray-100 p-1 rounded-xl flex">{`${data?.rates.opinions} دیدگاه`}<span className='lg:hidden block'><Icon icon={arrow_left} size={15}/></span></p>
              <div className="lg:block hidden w-1 h-1 bg-slate-300 rounded-full"></div>
              <p className="lg:text-cyan-400 lg:bg-transparent text-gray-800 bg-gray-100 p-1 rounded-xl flex">{`${data?.rates.questions} پرسش`}<span className='lg:hidden block'><Icon icon={arrow_left} size={15}/></span></p>
            </div>

            <div className="lg:hidden flex gap-2">
                {data?.MainProductInfoP.features.map((elem)=>{
                    return <div className="bg-gray-100 rounded-lg lg:py-3 py-2 px-2 flex flex-col lg:gap-2 gap-1" key={elem.id}>
                        <p className="text-gray-400 lg:text-xs text-[11px] line-clamp-1">{elem.title}</p>
                        <p className="text-gray-700 lg:text-xs text-[11px] line-clamp-1 font-bold">{elem.detail}</p>
                    </div>
                })}
            </div>

            <span className="font-bold">{`رنگ: ${data?.selected.color}`}</span>
            <div className="flex gap-2">
                {
                    data?.colors.map((elem, i)=>{
                        console.log(elem.colorTag);
                        
                        return <div onClick={()=>setchecked(i)} className={`border rounded-full w-fit p-1 flex gap-1 items-center text-[11px] ${checked==i && "border-2 border-blue-400"}`}>
                            <div className={`${elem.colorTag} lg:w-[30px] lg:h-[30px] w-[22px] h-[22px] rounded-full border flex justify-center items-center`}>
                                {checked==i && <Icon className={(elem.colorTag!="bg-[#000000]")?`text-black`:`text-white`} icon={ic_done}/>}
                            </div>
                            <span className='lg:hidden block px-1'>{elem.colorName}</span>
                        </div>
                    })
                }
            </div>

            <span className="font-bold">بیمه</span>
            <div className="border rounded-lg flex">
                <div className="h-full py-8 flex items-center px-3 border-l">
                    <input className="scale-150" type="checkbox" name="checkbox"/>
                </div>
                <div className="p-3 w-full flex flex-col gap-4">
                    <p className="text-xs">{data?.insurance.insuranceName}</p>
                    <div className="flex justify-between">
                        <span className="flex gap-2 items-center">
                            <OffPercent off={data?.insurance.offPercent} />
                            <LineThroughPrice oldPrice={data?.insurance.price} />
                            <PriceWithToman price={data?.insurance.offPrice} textSize={"text-sm"} />
                        </span>
                        <BlueLinkWithLeftArrow text={"جزییات"} size={"text-xs"}/>
                    </div>
                </div>
            </div>

            <span className="font-bold lg:block hidden">ویژگی‌ها</span>
            <div className="lg:grid hidden grid-cols-3 gap-2">
                {data?.MainProductInfoP.features.map((elem)=>{
                    return <div className="bg-gray-100 rounded-lg py-3 px-2 flex flex-col gap-2" key={elem.id}>
                        <p className="text-gray-400 text-xs line-clamp-1">{elem.title}</p>
                        <p className="text-gray-700 text-xs line-clamp-1 font-bold">{elem.detail}</p>
                    </div>
                })}
            </div>

            <div className="lg:flex hidden items-center gap-4">
                <div className="h-[1px] border-t border-gray-300 w-full"></div>
                <a href='#details' className="px-4 py-2 border border-gray-300 rounded-lg text-xs text-nowrap">
                    مشاهده همه ویژگی‌ها
                    <Icon icon={arrow_left} />
                </a>
                <div className="h-[1px] border-t border-gray-300 w-full"></div>
            </div>

            <div className="lg:flex hidden gap-3">
                <div className="py-1">
                    <div className="flex justify-center items-center text-[11px] w-[16px] h-[16px] bg-gray-400 text-white rounded-full pt-[5px]">
                    i
                    </div>
                </div>
                <p className="text-xs text-gray-500 leading-loose">امکان برگشت کالا در گروه موبایل با دلیل "انصراف از خرید" تنها در صورتی مورد قبول است که پلمب کالا باز نشده باشد.
                تمام گوشی‌های دیجی‌کالا ضمانت رجیستری دارند. در صورت وجود مشکل رجیستری، می‌توانید بعد از مهلت قانونی ۳۰ روزه، گوشی خریداری‌شده را مرجوع کنید.</p>
            </div>

            <div className="border border-gray-300 rounded-lg lg:flex hidden items-center justify-between px-4">
                <span>ارسال رایگان برای این کالا</span>
                <div><img className="h-[60px]" src="https://www.digikala.com/_next/static/media/normalFreeShippingTouchPointImage.d4416515.svg" alt="" /></div>
            </div>

            <div className="border border-gray-300 rounded-lg p-4 lg:block hidden">
                <div className="flex justify-between text-sm pb-3">
                    <div className="flex items-center gap-2">
                        <div className="bg-blue-800 w-4 h-4"></div>
                        <span>خرید این کالا با تسهیلات دیجی‌پی</span>
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

    <div className='fixed bottom-0 z-50 bg-white w-full py-3 border-t lg:hidden flex flex-col gap-2'>
        <span className="text-[11px] text-sky-700 px-2 block">{"۱۰+ هزار بازدید در ۲۴ ساعت اخیر"}</span>
        <div className='flex justify-between px-2'>
            <div><button className='bg-rose-500 text-xs text-white py-3 px-5 rounded-lg'>افزودن به سبد خرید</button></div>
            <div className='flex gap-1'>
                {/* <div className="flex justify-center items-center text-[11px] w-[14px] h-[14px] bg-gray-400 text-white rounded-full pt-[2px]">
                    i
                </div>
                <LineThroughPrice oldPrice={data.ProductSellers[0].price}/>
                <OffPercent off={data.ProductSellers[0].off}/> */}
                <PriceWithToman price={data.ProductSellers[0].price}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default MainDetails