import AmazingSuggestion from "../AmazingSuggestion/AmazingSuggestion";
import AmazingSupermarket from "../AmazingSupermarket/AmazingSupermarket";
import BannerSupermarket from "../BannerSupermarket/BannerSupermarket";
import Blog from "../Blog/Blog";
import BuyBySorting from "../BuyBySorting/BuyBySorting";
import Digiclub from "../Digiclub/Digiclub";
import Footer from "../../../Components/Footer/Footer";
import FourPicsBox from "../FourPicsBox/FourPicsBox";
import Header from "../../../Components/Header/Header";
import Highlights from "../Highlights/Highlights";
import MainSwipper from "../MainSwipper/MainSwipper.tsx";
import PopularBrands from "../PopularBrands/PopularBrands.tsx";
import SellSelection from "../SellSelection/SellSelection.tsx";
import TwoPicsBox from "../TwoPicsBox/TwoPicsBox.tsx";
import UserStories from "../UserStories/UserStories.tsx";
import YourIntrest from "../YourIntrest/YourIntrest.tsx";
import React from "react";

const Home:React.FC = () => {
  return (
    <div>
      <Header />
      <UserStories />
      <MainSwipper />
      <BannerSupermarket />
      <Highlights />
      <AmazingSuggestion />
      <AmazingSupermarket />
      <FourPicsBox />
      <BuyBySorting />
      <TwoPicsBox />
      <PopularBrands />
      <TwoPicsBox />
      <YourIntrest />
      <Digiclub />
      <YourIntrest />
      <SellSelection />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
