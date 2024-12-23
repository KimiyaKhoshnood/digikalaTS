import Icon from "react-icons-kit";
import { heartOutline } from "react-icons-kit/typicons/heartOutline";
import { heartFullOutline } from "react-icons-kit/typicons/heartFullOutline";
import { ic_timeline } from "react-icons-kit/md/ic_timeline";
import { list2 } from "react-icons-kit/icomoon/list2";
import { ic_notifications_active_outline } from "react-icons-kit/md/ic_notifications_active_outline";
import { ic_notifications_active } from "react-icons-kit/md/ic_notifications_active";
import { ic_flip } from "react-icons-kit/md/ic_flip";
import { ic_format_list_bulleted } from "react-icons-kit/md/ic_format_list_bulleted";
import { share } from "react-icons-kit/entypo/share";
import { shop } from "react-icons-kit/ikons/shop";
import {ic_verified_user_outline} from 'react-icons-kit/md/ic_verified_user_outline'
import {arrow_left} from 'react-icons-kit/ikons/arrow_left'
import {u1F69A} from 'react-icons-kit/noto_emoji_regular/u1F69A'
import {u23F0} from 'react-icons-kit/noto_emoji_regular/u23F0'
import {androidStar} from 'react-icons-kit/ionicons/androidStar'
import BlueLinkWithLeftArrow from "../../../Components/BlueLinkWithLeftArrow/BlueLinkWithLeftArrow";
import OffPercent from "../../../Components/OffPercent/OffPercent";
import LineThroughPrice from "../../../Components/LineThroughPrice/LineThroughPrice";
import PriceWithToman from "../../../Components/PriceWithToman/PriceWithToman";
import LeftGrayBox from "./LeftGrayBox";
import ProductPics from "./ProductPics";
import MainDetails from "./MainDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../../Redux/Posts/ProductReducer";
import { useEffect } from "react";


const MainProductInfo = () => {
  const { product, loading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchProduct());
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
          <MainDetails data={product}/>
          <div className='lg:hidden block w-full h-1 bg-gray-100'></div>
          <LeftGrayBox data={product}/>
        </div>
      </div>
    </div>
  );
};

export default MainProductInfo;
