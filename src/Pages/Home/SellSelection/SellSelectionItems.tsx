import { Link } from "react-router-dom"
import LineThroughPrice from "../../../Components/LineThroughPrice/LineThroughPrice"
import OffPercent from "../../../Components/OffPercent/OffPercent"
import PriceWithToman from "../../../Components/PriceWithToman/PriceWithToman"

const SellSelectionItems = ({eachProduct}) => {
  return (
    <>
    {/* title does not exist */}
    <Link to={`/product?${"title"}`} key={eachProduct.id} className="flex flex-col items-center p-3 ">
        <div className="py-2">
            <img className="lg:h-[150px] h-[130px]" src={eachProduct.img} alt="" />
        </div>
        <div className="flex justify-between items-center w-full">
            <OffPercent off={eachProduct.offPercent} />
            <PriceWithToman price={eachProduct.offPrice} textSize={"text-md"} />
        </div>
        <div className="w-full text-left pl-5"><LineThroughPrice oldPrice={eachProduct.price} /></div>
    </Link>
    </>
  )
}

export default SellSelectionItems