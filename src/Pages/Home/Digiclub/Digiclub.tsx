import Icon from "react-icons-kit";

import {gift} from 'react-icons-kit/typicons/gift'
import {ribbonB} from 'react-icons-kit/ionicons/ribbonB'
import {map} from 'react-icons-kit/ionicons/map'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPost } from "../../../Redux/Posts/PostReducer";
// icons
const Digiclub = () => {
    // const DigiclubP = [
    //     {
    //         "title": "چرخ و بخت",
    //         "icon": ribbonB,
    //         "image": "https://www.digikala.com/statics/img/png/digiclub/wheel-spinner.webp",
    //         "id": 1
    //     },{
    //         "title": "ماموریت ها",
    //         "icon": map,
    //         "image": "https://www.digikala.com/statics/img/png/digiclub/missions.webp",
    //         "id": 2
    //     },{
    //         "title": "جایزه ها",
    //         "icon": gift,
    //         "image": "https://www.digikala.com/statics/img/png/digiclub/awards.webp",
    //         "id": 3
    //     }
    // ]

    const {home, loading, error} = useSelector((state)=>state.home)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchPost())
    },[])
    
    return ( 
        <>
        <div className="flex justify-center lg:p-4 py-4">
            <div className="bg-gradient-to-l from-[#007295] to-[#35a6c8] lg:rounded-xl max-w-[1336px] w-full px-4 lg:py-3 py-4 flex lg:flex-row flex-col gap-2 justify-between lg:items-center">
                <a className="px-4" href="">
                    <img className="w-[119px] h-[33px]" src="https://www.digikala.com/statics/img/svg/club/digiclub-logo-white.svg" alt="" />
                </a>
                <div className="flex gap-1 justify-center">
                    {
                        home?.DigiclubP.map((elem)=>{
                            return <a className="flex lg:flex-row flex-col lg:gap-0  bg-white items-center p-[2px] last-of-type:rounded-l-lg first-of-type:rounded-r-lg" href="">
                            <div className="flex lg:flex-row flex-col items-center gap-1 lg:p-0 py-2">
                                <Icon className="text-[#35a6c8]" icon={ribbonB} size={20}/>
                                <span className="text-xs">{elem.title}</span>
                            </div>
                            <div className="lg:w-[168px] h-[60px]">
                                <img className="w-full h-full object-cover rounded-md" src={elem.image} alt="" />
                            </div>
                        </a>
                        })
                    }
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Digiclub;