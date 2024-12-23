import Icon from "react-icons-kit"
import { u25C0 } from "react-icons-kit/noto_emoji_regular/u25C0"
import { SwiperSlide } from "swiper/react"

const EachVideo = ({videoDetails}) => {
  return (
    <>
                <div className="bg-black w-[280px] !h-[280px] flex justify-center">
                  <div className="fixed w-full !h-[280px] flex items-center justify-center">
                    <div className="w-10 h-10 bg-black/30 rounded-full pt-[5px] pr-2 rotate-180">
                    <Icon className="text-white" icon={u25C0} size={25}/>
                    </div>
                  </div>
                  <img className="h-full" src={videoDetails.video} alt="" />
                </div>
                <div className="py-3">{videoDetails.title}</div>
                <div className="flex text-xs text-gray-500 items-center gap-2">
                    <img className="w-6 h-6 rounded-full" src={videoDetails.profilePic} alt="" />
                    <span>{videoDetails.accountName}</span>
                </div>
                </>
  )
}

export default EachVideo