import Icon from 'react-icons-kit'
import EachSeller from './EachSeller';
import BlueLinkWithLeftArrow from '../../../Components/BlueLinkWithLeftArrow/BlueLinkWithLeftArrow';
import { useEffect, useState } from 'react';
import TopicWithRedLine from '../TopicWithRedLine/TopicWithRedLine';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../../Redux/Posts/ProductReducer';

const ProductSellers = () => {
  const ProductSellersP = [
    {
        "title": "هشتگ کالا رز همراه",
        "selection": false,
        "satisfaction": "۱۰۰",
        "performance": "عالی",
        "days": 0,
        "guarantee": "گارانتی ۱۸ ماهه رز همراه فروهر",
        "price": "۴۵,۸۹۹,۰۰۰",
        "plusService": true,
        "id": 1
    },{
        "title": "سی تلکام",
        "selection": false,
        "satisfaction": "۱۰۰",
        "performance": "عالی",
        "days": 0,
        "guarantee": "گارانتی ۱۸ ماهه پیشتازان فناوری سیب طلایی (سی تلکام)",
        "price": "۴۵,۹۲۰,۰۰۰",
        "plusService": true,
        "id": 2
    },{
        "title": "هشتگ کالا رز همراه",
        "selection": false,
        "satisfaction": "۱۰۰",
        "performance": "عالی",
        "days": 0,
        "guarantee": "گارانتی ۱۸ ماهه رز همراه فروهر",
        "price": "۴۵,۸۹۹,۰۰۰",
        "plusService": true,
        "id": 3
    },{
        "title": "هشتگ کالا رز همراه",
        "selection": false,
        "satisfaction": "۱۰۰",
        "performance": "عالی",
        "days": 0,
        "guarantee": "گارانتی ۱۸ ماهه رز همراه فروهر",
        "price": "۴۵,۸۹۹,۰۰۰",
        "plusService": true,
        "id": 4
    },{
        "title": "هشتگ کالا رز همراه",
        "selection": false,
        "satisfaction": "۱۰۰",
        "performance": "عالی",
        "days": 0,
        "guarantee": "گارانتی ۱۸ ماهه رز همراه فروهر",
        "price": "۴۵,۸۹۹,۰۰۰",
        "plusService": true,
        "id": 5
    },{
        "title": "هشتگ کالا رز همراه",
        "selection": false,
        "satisfaction": "۱۰۰",
        "performance": "عالی",
        "days": 0,
        "guarantee": "گارانتی ۱۸ ماهه رز همراه فروهر",
        "price": "۴۵,۸۹۹,۰۰۰",
        "plusService": true,
        "id": 6
    }
  ]

  const { product, loading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
    useEffect(() => {
      setTimeout(() => {
        dispatch(fetchProduct());
    }, 1000);
  }, []);

  const [readMore, setReadMore] = useState(false);
  const [readMoreBtn, setReadMoreBtn] = useState("مشاهده بیشتر");

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
                return (index<4 || readMore) && <EachSeller data={elem}/>
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