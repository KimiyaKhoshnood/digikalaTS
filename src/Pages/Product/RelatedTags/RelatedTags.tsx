import { useDispatch, useSelector } from "react-redux";
import TopicWithRedLine from "../TopicWithRedLine/TopicWithRedLine"
import { useEffect } from "react";
import { fetchProduct } from "../../../Redux/Posts/ProductReducer";
import { AppDispatch, RootState } from "../../../Redux/Store";

const RelatedTags = () => {
  const { product, loading, error } = useSelector((state:RootState) => state.product);
  const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
      setTimeout(() => {
        dispatch(fetchProduct(""));
    }, 1000);
  }, []);

  return (
    <div className="w-full max-w-[1676px] p-4">
        <TopicWithRedLine title={"تگ‌های‌ مرتبط"}/>
        <div className="py-5 flex gap-2">
            {
            product?.RelatedTagsP.map((elem)=>{
                return <span key={elem.id} className="p-2 border rounded-3xl text-xs text-cyan-500">{elem.text}</span>
            })
            }
        </div>
    </div>
  )
}

export default RelatedTags