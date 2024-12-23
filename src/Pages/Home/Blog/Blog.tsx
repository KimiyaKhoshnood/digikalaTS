import { useDispatch, useSelector } from "react-redux";
import BlueLinkWithLeftArrow from "../../../Components/BlueLinkWithLeftArrow/BlueLinkWithLeftArrow";
import { useEffect } from "react";
import { fetchPost } from "../../../Redux/Posts/PostReducer";

const Blog = () => {

  const {home, loading, error} = useSelector((state)=>state.home)
  const dispatch = useDispatch()
  useEffect(()=>{
        dispatch(fetchPost())
  },[])
  return (
    <div className="flex justify-center p-4">
      <div className="max-w-[1336px] w-full flex flex-col gap-3">
        <div className="flex justify-between items-center w-full px-5 py-2">
          <h5><strong>خواندنی‌ها</strong></h5>
          <BlueLinkWithLeftArrow text={"مطالب بیشتر در دیجی‌کالا مگ"} size={"text-xs"} />
        </div>
        <div className="gap-4 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          {home?.BlogP?.map((elem) => {
            return <div className="border rounded-xl">
                <img src={elem.img} alt="" className="rounded-t-xl"/>
                <p className="text-xs leading-loose px-4 mt-2 mb-4">{elem.text}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
