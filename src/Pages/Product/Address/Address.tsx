import Icon from "react-icons-kit"
import {shop} from 'react-icons-kit/ikons/shop'
import {megaphone} from 'react-icons-kit/entypo/megaphone'
import { useDispatch, useSelector } from "react-redux"
import { fetchProduct } from "../../../Redux/Posts/ProductReducer"
import { useEffect } from "react"

const Address = () => {
  const { product, loading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchProduct());
    }, 1000);
  }, []);
  
  return (
    <div className="p-4 w-full max-w-[1676px] flex justify-between text-xs text-gray-500">
        <div className="flex gap-2">
            {
                product?.AddressP.map((elem, index)=>{
                    return <>
                    <a href="">{elem.text}</a> {(index<(product.AddressP.length-1))? "/": null}
                    </>
                })
            }
        </div>
        <div className="lg:flex hidden gap-8">
            <div>
                ثبت آگهی در پیندو
                <Icon className="px-1" icon={megaphone}/>
            </div>
            <div>
                فروش در دیجی‌کالا
                <Icon className="px-1" icon={shop}/>
            </div>
        </div>
    </div>
  )
}

export default Address