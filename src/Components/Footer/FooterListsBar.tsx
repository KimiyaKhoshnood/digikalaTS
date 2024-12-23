import React, { useState } from "react";
import Icon from "react-icons-kit";
import { chevronDown } from "react-icons-kit/feather/chevronDown";

type footerListsBarProp = {
  title:string
  lists?:{text: string, id: number}[]
  brands?:{img: string, id: number}[]
}

const FooterListsBar:React.FC<footerListsBarProp> = ({ title, lists, brands }) => {
    const [openedListsBar, setOpenedListsBar] = useState(false)

  return (
    <div onClick={()=>setOpenedListsBar(!openedListsBar)} className="border-b py-5 flex flex-col gap-5">
      <div className="flex justify-between text-sm">
        <h3>{title}</h3>
        <Icon icon={chevronDown} />
      </div>
      <div className={`${openedListsBar?"flex":"hidden"} flex-col text-gray-500 text-xs leading-loose`}>
        {lists?.map((elem) => {
          return <a href="">{elem.text}</a>;
        })}
        <div className="grid grid-cols-3 ">{
            brands?.map((elem)=>{
                return <div className="h-20 flex items-center justify-center border-l border-b"> <img src={elem.img} alt="" /></div>
            })
        }</div>
      </div>
    </div>
  );
};

export default FooterListsBar;
