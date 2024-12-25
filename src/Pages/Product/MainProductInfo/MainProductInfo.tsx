import LeftGrayBox from "./LeftGrayBox";
import ProductPics from "./ProductPics";
import MainDetails from "./MainDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../../Redux/Posts/ProductReducer";
import React, { useEffect } from "react";
import { AppDispatch, RootState } from "../../../Redux/Store";


const MainProductInfo:React.FC = () => {
  const { product, loading, error } = useSelector((state:RootState) => state.product);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchProduct(""));
    }, 1000);
  }, []);

  return (
    <div className="lg:p-4 w-full max-w-[1676px] flex lg:flex-row flex-col">
      <ProductPics />
      <div className="flex-1">
        <div className="px-4">
          <div className="flex gap-2 text-cyan-500 lg:text-sm text-[11px] leading-loose">
            <a href="">اپل</a>/<a href="">گوشی موبایل</a>
          </div>
          <h1 className="text-lg leading-loose pb-3">
            <strong>
              {product?.productName}
            </strong>
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col gap-4">
          {product && <MainDetails englishName={product.englishName} rates={product?.rates} features={product.MainProductInfoP.features} selectedColor={product.selected.color} colors={product.colors} insurance={product.insurance} price={product.ProductSellers[0].price} />}
          <div className='lg:hidden block w-full h-1 bg-gray-100'></div>
          {product && <LeftGrayBox data={product}/> }
        </div>
      </div>
    </div>
  );
};

export default MainProductInfo;
