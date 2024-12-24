import { useDispatch, useSelector } from "react-redux";
import TwoPicItems from "./TwoPicItems";
import React, { useEffect } from "react";
import { fetchPost } from "../../../Redux/Posts/PostReducer";
import { AppDispatch, RootState } from "../../../Redux/Store";

const TwoPicsBox:React.FC = () => {

    const {home, loading, error} = useSelector((state:RootState)=>state.home)
    const dispatch = useDispatch<AppDispatch>()
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