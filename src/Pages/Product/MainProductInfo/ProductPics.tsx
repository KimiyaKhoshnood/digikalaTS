import React, { useRef, useState } from 'react'
import Icon from 'react-icons-kit'
import { share } from 'react-icons-kit/entypo/share'
import { ic_flip } from 'react-icons-kit/md/ic_flip'
import { ic_format_list_bulleted } from 'react-icons-kit/md/ic_format_list_bulleted'
import { ic_notifications_active_outline } from 'react-icons-kit/md/ic_notifications_active_outline'
import { ic_timeline } from 'react-icons-kit/md/ic_timeline'
import { heartOutline } from 'react-icons-kit/typicons/heartOutline'

const ProductPics = () => {
  const imageZoomRef = useRef(null);
  const [zoomStyles, setZoomStyles] = useState({
    display: "none",
    zoomX: "0%",
    zoomY: "0%",
  });
  const handleMouseMove = (event) => {
    const imageZoom = imageZoomRef.current;
    if (imageZoom) {
      const pointer = {
        x: (event.nativeEvent.offsetX * 100) / imageZoom.offsetWidth,
        y: (event.nativeEvent.offsetY * 100) / imageZoom.offsetHeight,
      };
      setZoomStyles({
        display: "block",
        zoomX: `${pointer.x}%`,
        zoomY: `${pointer.y}%`,
      });
    }
  };
  const handleMouseOut = () => {
    setZoomStyles({ display: "none", zoomX: "0%", zoomY: "0%" });
  };

  return (
    <div className="flex flex-col">
        <div className="flex">
          <div className="lg:flex hidden flex-col gap-2 text-gray-700">
            <div className="">
              <Icon size={25} icon={heartOutline} />
            </div>
            <div className="">
              <Icon size={25} icon={share} />
            </div>
            <div className="">
              <Icon size={25} icon={ic_notifications_active_outline} />
            </div>
            <div className="">
              <Icon size={25} icon={ic_timeline} />
            </div>
            <div className="">
              <Icon size={25} icon={ic_flip} />
            </div>
            <div className="">
              <Icon size={25} icon={ic_format_list_bulleted} />
            </div>
          </div>
          <div className='lg:w-fit w-full lg:block flex justify-center'>
            <div
              className='sm:w-[400px] sm:h-[350px] max-w-[350px] max-h-[400px] relative'
              id="imageZoom"
              ref={imageZoomRef}
              style={{
                "--url": "url('https://dkstatics-public.digikala.com/digikala-products/8da0ac0e9c414ff6bc745cd6b032ef61e6d93cf1_1730113501.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90')",
                "--zoom-x": zoomStyles.zoomX,
                "--zoom-y": zoomStyles.zoomY,
                "--display": zoomStyles.display,
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseOut}
            >
              <img className='w-full h-full object-cover objec' src="https://dkstatics-public.digikala.com/digikala-products/8da0ac0e9c414ff6bc745cd6b032ef61e6d93cf1_1730113501.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90" alt="" />
            </div>
          </div>
        </div>
        <div className="lg:flex hidden gap-3 py-3">
          <div className="border border-gray-300 rounded-md w-fit p-1">
            <img
              className="h-[72px] w-[72px]"
              src="https://dkstatics-public.digikala.com/digikala-products/8da0ac0e9c414ff6bc745cd6b032ef61e6d93cf1_1730113501.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
              alt=""
            />
          </div>
          <div className="border border-gray-300 rounded-md w-fit p-1">
            <img
              className="h-[72px] w-[72px]"
              src="https://dkstatics-public.digikala.com/digikala-products/8da0ac0e9c414ff6bc745cd6b032ef61e6d93cf1_1730113501.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
              alt=""
            />
          </div>
        </div>
        <div className="lg:flex hidden gap-5">
          <span className="flex gap-1 text-gray-600">
            <div className="flex justify-center items-center text-[11px] w-[18px] h-[18px] border border-gray-600 rounded-full">
              i
            </div>
            <span className="text-xs">گزارش مشخصات کالا یا موارد قانونی</span>
          </span>
          <span className="text-xs text-gray-500">DKP-8366616</span>
        </div>
      </div>
  )
}

export default ProductPics