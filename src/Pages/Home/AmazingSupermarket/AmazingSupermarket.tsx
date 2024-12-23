import Icon from 'react-icons-kit';
import {arrowLeft} from 'react-icons-kit/feather/arrowLeft'
import ASupermarketItems from './ASupermarketItems';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../../../Redux/Posts/PostReducer';

const AmazingSupermarket = () => {

  const { home, loading, error } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchPost());
    }, 1000);
  }, []);


  return (
    <>
      <div className="flex justify-center px-4 py-3">
        <a className='max-w-[1336px] bg-[#EBEEED] w-full rounded-2xl' href="">
        <div className="bg-[url('https://www.digikala.com/statics/img/svg/typography/freshPattern.svg')] bg-left h-fit w-full flex lg:flex-row flex-col justify-between px-4 py-4 rounded-2xl bg-no-repeat lg:gap-0 gap-3">
          <div className="flex lg:flex-row flex-col lg:items-center gap-2">
            <div className='flex gap-2'>
              <img className="lg:w-[66px] w-[40px] lg:h-[62px] h-[38px]" src="https://www.digikala.com/statics/img/png/amazing/fresh.webp" alt="" />
              <img className="lg:w-[250px] w-[190px]" src="https://www.digikala.com/statics/img/svg/amazing/fresh-incredible-offer.svg" alt="" />
            </div>
            <span className="bg-[#029a49] w-fit h-fit py-1 px-3 rounded-2xl text-white lg:text-sm text-xs">تا ۵۰٪ تخفیف</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className='flex gap-2'>
                {
                  home?.ASupermarketItemsP.map((elem, i)=>{
                    return( ((window.innerWidth>= 1227) && (i<6) && <ASupermarketItems image={elem.image} off={elem.off} key={elem.id}/>) 
                    || ((window.innerWidth< 1227 && window.innerWidth>= 1145) && (i<5) && <ASupermarketItems image={elem.image} off={elem.off} key={elem.id}/>)
                    || ((window.innerWidth< 1227 && window.innerWidth>= 1065) && (i<4) && <ASupermarketItems image={elem.image} off={elem.off} key={elem.id}/>)
                    || ((window.innerWidth< 1065) && (i<3) && <ASupermarketItems image={elem.image} off={elem.off} key={elem.id}/>)
                  )
                  })
                }
            </div>
            <span className="py-3 px-4 bg-white lg:flex hidden justify-center items-center h-fit rounded-3xl text-[#029a49] text-sm gap-2">بیش از ۲۰ کالا <Icon icon={arrowLeft}/> </span>
            <div className='lg:hidden flex justify-center items-center bg-white w-[44px] h-[44px] rounded-full text-[#029a49]'><Icon className='' icon={arrowLeft} size={20}/></div>
            
          </div>
        </div>
        </a>
      </div>
    </>
  );
};

export default AmazingSupermarket;
