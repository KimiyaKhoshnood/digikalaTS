const BuyBySortingItems = ({image, text}) => {
    return ( 
        <>
        <a className="flex flex-col gap-2 items-center px-2 lg:w-[132px] w-[122px]  m-1" href="">
            <img className="lg:w-[100px] lg:h-[100px] w-[90px] h-[90px]" src={image} alt="" />
            <p className="text-xs w-fit max-w-[100px]">{text}</p>
        </a>
        </>
     );
}
 
export default BuyBySortingItems;