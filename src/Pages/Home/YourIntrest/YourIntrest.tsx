import { useDispatch, useSelector } from "react-redux"
import YourIntrestImgs from "./YourIntrestImgs"
import { useEffect } from "react"
import { fetchPost } from "../../../Redux/Posts/PostReducer"
import { AppDispatch, RootState } from "../../../Redux/Store"

const YourIntrest = () => {
    const {home, loading, error} = useSelector((state:RootState)=>state.home)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(()=>{
        dispatch(fetchPost())
    },[])
    
  return (
    <div className="flex justify-center p-4">
    <div className="max-w-[1336px] w-full grid lg:grid-cols-4 grid-cols-1 gap-1 divide-x divide-x-reverse lg:divide-y-0 divide-y border rounded-xl">
        {
            home?.YourIntrestP.map((eachIntrest)=>{
                return <YourIntrestImgs eachIntrest={eachIntrest} key={eachIntrest.id}/>
            })
        }
    </div>
    </div>
  )
}

export default YourIntrest