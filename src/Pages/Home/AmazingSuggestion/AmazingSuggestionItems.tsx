import { Link } from "react-router-dom";
import LineThroughPrice from "../../../Components/LineThroughPrice/LineThroughPrice";
import OffPercent from "../../../Components/OffPercent/OffPercent";
import PriceWithToman from "../../../Components/PriceWithToman/PriceWithToman";

const AmazingSuggestionItems = ({image, title, oldPrice, newPrice, off}) => {
    return ( 
        <>
        <Link to={`/product?${title}`} className="h-full lg:w-[160px] w-[130px] p-[14px] flex flex-col justify-center">
            <img className="" src={image} alt="" />
            <h3 className="text-xs leading-relaxed py-2 line-clamp-2 h-[50px]">{title}</h3>
            <div className="flex justify-between">
                <OffPercent off={off} />
                <PriceWithToman price={newPrice} textSize={"text-sm"} />
            </div>
            <div className="text-end pl-6"><LineThroughPrice oldPrice={oldPrice} /></div>
        </Link>
        </>
     );
}
 
export default AmazingSuggestionItems;