import Icon from 'react-icons-kit'
import { starEmpty } from 'react-icons-kit/icomoon/starEmpty'
import { starFull } from 'react-icons-kit/icomoon/starFull'
import { starHalf } from 'react-icons-kit/icomoon/starHalf'

const Rating = ({rate ,size}) => {
  return (
    <div className='text-yellow-400'>{
        Array(5).fill(0).map((_,index)=>{
            return (rate>= index+1 &&  <Icon size={size} icon={starFull} />
            )
        })
    }
    {
        rate > Math.floor(rate) && <Icon size={size} icon={starHalf} style={{transform:"rotateY(180deg)"}}/>
    }
    {
        Array(5).fill(0).map((_,index)=>{
            return (Math.ceil(rate)< index+1 &&  <Icon size={size} icon={starEmpty} />
            )
        })
    }</div>
  )
}

export default Rating