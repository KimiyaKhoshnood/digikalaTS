import { useDispatch, useSelector } from "react-redux";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import OnlineSupport from "../../../Components/OnlineSupport/OnlineSupport";
import Address from "../Address/Address";
import BoughtTogether from "../BoughtTogether/BoughtTogether";
import DetailsSection from "../DetailsSection/DetailsSection";
import DigikalaAdvantages from "../DigikalaAdvantages/DigikalaAdvantages";
import MainProductInfo from "../MainProductInfo/MainProductInfo";
import PindoRelated from "../PindoRelated/PindoRelated";
import ProductSellers from "../ProductSellers/ProductSellers";
import ProductSwiper from "../ProductSwiper/ProductSwiper";
import RelatedTags from "../RelatedTags/RelatedTags";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import SimilarProducts from "../SimilarProducts/SimilarProducts";
import { useEffect } from "react";
import { fetchProduct } from "../../../Redux/Posts/ProductReducer";
import Loading from "../Loading/Loading";

const Product = () => {
  const { product, loading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchProduct());
    }, 1000);
  }, []);
  return (
    <div>
      <Header />
      {product ? <div className="flex flex-col items-center">
        <Address />
        <MainProductInfo />
        <DigikalaAdvantages />
        <ProductSellers/>
        <SimilarProducts />
        <RelatedVideos />
        <RelatedTags />
        <PindoRelated />
        <ProductSwiper />
        <DetailsSection/>
        <BoughtTogether/>
      </div>: <Loading/>}
      <Footer />
    </div>
  );
};

export default Product;
