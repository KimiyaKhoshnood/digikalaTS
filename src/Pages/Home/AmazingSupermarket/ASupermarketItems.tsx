import { Link } from "react-router-dom";
import OffPercent from "../../../Components/OffPercent/OffPercent";

const ASupermarketItems = ({image, off}) => {
    return ( 
        <>
        {/* title does not exist */}
        <Link to={`/product?${"title"}`} className="lg:w-[74px] lg:h-[74px] w-[68px] h-[68px] rounded-full bg-white p-2">
            <img className="rounded-full" src={image} alt="" />
            <div className="relative bottom-2"><OffPercent off={off}/></div>
        </Link>
        </>
     );
}
 
export default ASupermarketItems;