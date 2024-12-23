import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../../Redux/Posts/ProductReducer";

const DigikalaAdvantages = () => {
  const { product, loading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
    useEffect(() => {
      setTimeout(() => {
        dispatch(fetchProduct());
    }, 1000);
  }, []);
  
  return (
    <div className="w-full max-w-[1676px] lg:p-4 py-4 min-w-[85px] lg:bg-white bg-gray-100">
        <div className="lg:block hidden h-[1px] bg-gray-200"></div>
        <div className="flex gap-1 py-3 max-w-[1636px] w-full bg-white">
              {product?.digikalaAdvantagesP.map((elem) => {
                return (
                  <div className="text-[10px] text-center text-gray-400 flex-1 flex lg:flex-row flex-col items-center justify-center">
                    <img className="w-11 h-11" src={elem.img} alt="" />
                    <h4>{elem.text}</h4>
                  </div>
                );
              })}
        </div>

    </div>
  )
}

export default DigikalaAdvantages