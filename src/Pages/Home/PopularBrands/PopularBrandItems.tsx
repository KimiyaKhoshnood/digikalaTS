const PopularBrandItems = ({image}) => {
    return ( 
        <>
        <a href="" className="block py-1 px-4 bg-white">
            <img className="lg:w-[110px] lg:h-[110px] w-[70px] h-[70px]" src={image} alt="" />
        </a>
        </>
     );
}
 
export default PopularBrandItems;