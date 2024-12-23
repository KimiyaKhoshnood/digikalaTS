import Icon from 'react-icons-kit'
import {moreVertical} from 'react-icons-kit/feather/moreVertical'
import Rating from './Rating'
import { shop } from 'react-icons-kit/ikons/shop'
import {ic_thumb_up_outline} from 'react-icons-kit/md/ic_thumb_up_outline'
import {ic_thumb_up} from 'react-icons-kit/md/ic_thumb_up'
import {ic_thumb_down_outline} from 'react-icons-kit/md/ic_thumb_down_outline'
import {ic_thumb_down} from 'react-icons-kit/md/ic_thumb_down'

const Reviews = ({comment}) => {
  return (
    <div className='lg:border-b lg:border-0 border rounded-lg py-5 lg:px-0 px-5 flex lg:w-auto w-[270px]' >
        <div className='flex-1 flex flex-col gap-4'>
            <div className='flex items-center gap-3'>
                <span className='text-xs text-gray-500'>{comment.user}</span>
                <span className='px-2 py-[2px] bg-green-50 text-green-800 text-[10px] rounded-xl'>خریدار</span>
                <div className='lg:block hidden w-1 h-1 bg-gray-300 rounded-full'></div>
                <span className='lg:block hidden text-[10px] text-gray-500'>{comment.date}</span>
            </div>
            <Rating rate={comment.rateEnglish} size={23}/>
            <p className='text-sm'>{comment.comment}</p>
            <div className='flex items-center justify-between gap-3 text-[11px]'>
              <div className='lg:hidden block'>{comment.date}</div>
              <div className='lg:flex hidden items-center gap-3 text-[11px]'>
                <Icon icon={shop}/>
                <span className='text-gray-500'>{comment.guaranteeName}</span>
                <div className='w-1 h-1 bg-gray-300 rounded-full'></div>
                <div className='w-3 h-3 bg-black rounded-full border'></div>
                <span className='text-gray-500'>{comment.color}</span>
              </div>
              <div className='flex items-center gap-2 text-gray-400'>
                <span>{comment.like}</span>
                <Icon className='' icon={ic_thumb_up_outline} />
                <span>{comment.dislike}</span>
                <Icon icon={ic_thumb_down_outline} />
              </div>
            </div>
        </div>
        <div className='lg:block hidden'><Icon icon={moreVertical}/></div>
    </div>
  )
}

export default Reviews