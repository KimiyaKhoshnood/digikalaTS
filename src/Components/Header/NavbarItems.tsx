import React from "react";
import Icon from "react-icons-kit";

type NavbarItemsProp = {
    icon:any
    text:string
    color:string
    size:string
}

const NavbarItems:React.FC<NavbarItemsProp> = ({icon, text, color, size}) => {
    return ( 
        <>
        <div className={`w-fit h-fit text-sm flex items-center  px-[10px] pt-[10px] cursor-pointer ${color}`}>
            {icon && <Icon className="flex items-center justify-center pl-1" icon={icon} size={15}/>}
            <span className={size}>{text}</span>
        </div>
        </>
     );
}
 
export default NavbarItems;