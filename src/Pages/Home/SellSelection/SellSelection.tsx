import { useDispatch, useSelector } from "react-redux"
import LineThroughPrice from "../../../Components/LineThroughPrice/LineThroughPrice"
import OffPercent from "../../../Components/OffPercent/OffPercent"
import PriceWithToman from "../../../Components/PriceWithToman/PriceWithToman"
import SellSelectionItems from "./SellSelectionItems"
import { fetchPost } from "../../../Redux/Posts/PostReducer"
import { useEffect } from "react"

const SellSelection = () => {
  const {home, loading, error} = useSelector((state)=>state.home)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchPost())
  },[])
  
  return (
    <div className="flex justify-center p-4">
        <div className="max-w-[1336px] w-full lg:border border-gray-300 rounded-xl lg:px-4 py-4">
            <div className="flex justify-center py-4">
                <h3 className="text-xl">منتخب محصولات تخفیف و حراج</h3>
            </div>
            <div className="grid xl:grid-cols-6 lg:grid-cols-5 grid-cols-2 divide-x divide-x-reverse divide-y">
                {home?.SellSelectionP.map((elem)=> {
                    return <SellSelectionItems eachProduct={elem}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default SellSelection