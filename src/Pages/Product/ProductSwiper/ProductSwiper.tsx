import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProduct } from '../../../Redux/Posts/ProductReducer';

const ProductSwiper = () => {
  const { product, loading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
    useEffect(() => {
      setTimeout(() => {
        dispatch(fetchProduct());
    }, 1000);
  }, []);

  return (
    <div className='w-full max-w-[1676px] p-4'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {
            product?.ProductSwiperP.map((elem)=>{
                return <SwiperSlide key={elem.id}>
                    <div className='lg:block hidden'><img className='rounded-xl' src={elem.imgLg} alt="" /></div>
                    <div className='block lg:hidden'><img className='rounded-xl' src={elem.imgSm} alt="" /></div>
                    </SwiperSlide>
            })
        }
      </Swiper>
    </div>
  )
}

export default ProductSwiper