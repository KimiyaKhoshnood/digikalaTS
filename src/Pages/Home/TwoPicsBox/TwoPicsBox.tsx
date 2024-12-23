import { useDispatch, useSelector } from "react-redux";
import TwoPicItems from "./TwoPicItems";
import { useEffect } from "react";
import { fetchPost } from "../../../Redux/Posts/PostReducer";

const TwoPicsBox = () => {

    const {home, loading, error} = useSelector((state)=>state.home)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchPost())
    },[])
    

    return ( 
        <>
        <div className="flex justify-center p-4">
            <div className="max-w-[1336px] w-full gap-4 grid lg:grid-cols-2 grid-cols-1">
                {
                    home?.TwoPicItemsP?.map((elem)=>{
                        return( <TwoPicItems image={elem.image} key={elem.id}/> )
                })
                }
            </div>
        </div>
        </>
     );
}
 
export default TwoPicsBox;