import React from "react";

const FourPicItems:React.FC<{image:string}> = ({image}) => {
    return ( 
        <>
        <a className="rounded-2xl" href=""><img className="w-full rounded-2xl" src={image} alt="" /></a>
        </>
     );
}
 
export default FourPicItems;