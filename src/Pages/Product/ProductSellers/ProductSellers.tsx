import EachSeller from './EachSeller';
import BlueLinkWithLeftArrow from '../../../Components/BlueLinkWithLeftArrow/BlueLinkWithLeftArrow';
import React, { useEffect, useState } from 'react';
import TopicWithRedLine from '../TopicWithRedLine/TopicWithRedLine';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../../Redux/Posts/ProductReducer';
import { AppDispatch, RootState } from '../../../Redux/Store';

const ProductSellers:React.FC = () => {

  const { product, loading, error } = useSelector((state:RootState) => state.product);
  const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
      setTimeout(() => {
        dispatch(fetchProduct(""));
    }, 1000);
  }, []);

  const [readMore, setReadMore] = useState(false);
  const [readMoreBtn, setReadMoreBtn] = useState<"مشاهده بیشتر"|"بستن">("مشاهده بیشتر");

  const ReadMoreBtnFunc = () => {
    setReadMore(!readMore);
    readMore ? setReadMoreBtn("مشاهده بیشتر") : setReadMoreBtn("بستن");
  }; 

  return (
    <div className="lg:block hidden w-full max-w-[1676px] p-4">
        <div className="h-1 bg-gray-200"></div>
          <div className="py-3">
            <TopicWithRedLine title={"فروشندگان این کالا"}/>
          </div>
          <div>
            {product?.ProductSellers.map((elem, index)=>{
                return (index<4 || readMore) && <EachSeller key={elem.id} data={elem}/>
            })}
          </div>
          <div className='py-3'>
            <BlueLinkWithLeftArrow text={readMoreBtn} size={"text-xs"} functionBtn={ReadMoreBtnFunc}/>
          </div>
        <div className="h-1 bg-gray-200 mt-3"></div>
    </div>
  )
}

export default ProductSellers