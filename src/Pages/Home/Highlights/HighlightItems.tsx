import Icon from 'react-icons-kit';
import {moreHorizontal} from 'react-icons-kit/feather/moreHorizontal'

const HighlightItems = ({image, text}) => {
    return ( 
        <>
        <div className="lg:w-full w-[82px]">
          <a href="#" className='flex flex-col gap-2 py-2 items-center'>
            {image?(<img src={image} alt="" className="w-[52px] h-[52px]"/>)
            :(<div className="w-[52px] h-[52px] rounded-full flex justify-center items-center bg-[#F0F0F1]"><Icon className='text-[#A1A3A8]' icon={moreHorizontal} size={32}/></div>)}
            <span className="text-xs text-center px-4 text-wrap leading-relaxed">{text}</span>
          </a>  
        </div>
        </>
     );
}
 
export default HighlightItems;