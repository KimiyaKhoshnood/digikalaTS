import Icon from 'react-icons-kit'
import {arrow_left} from 'react-icons-kit/ikons/arrow_left'

const BlueLinkWithLeftArrow = ({text, size, functionBtn}) => {
  return (
    <span 
      onClick={functionBtn} 
      className={`text-cyan-400 ${size} cursor-pointer`}>
        {text}
        <Icon icon={arrow_left}/>
    </span>
  )
}

export default BlueLinkWithLeftArrow