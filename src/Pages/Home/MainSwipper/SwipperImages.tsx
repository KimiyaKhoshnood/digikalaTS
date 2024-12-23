const SwipperImages = ({image}) => {
    return ( 
        <>
        <div className="flex h-full w-full lg:px-0 px-2">
            <img className="object-cover lg:rounded-none rounded-2xl" src={image} alt="" />
        </div>
        </>
     );
}
 
export default SwipperImages;