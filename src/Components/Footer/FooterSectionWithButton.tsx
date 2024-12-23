import React from "react"

type FooterSectionWithButtonProp = {
  img:string
  miniTitle:string
  mainTitle:string
  btnText:string
  btnColor:string
}

const FooterSectionWithButton:React.FC<FooterSectionWithButtonProp> = ({img, miniTitle, mainTitle, btnText, btnColor}) => {
  return (
    <div className="flex justify-between items-center py-4">
        <div className="flex items-center gap-3">
            <div className="w-[44px] h-[44px]"><img src={img} alt="" /></div>
            <div className="flex flex-col leading-loose gap-1">
                <span className="text-[10px]">{miniTitle}</span>
                <span className="text-sm">{mainTitle}</span>
            </div>
        </div>
        <button className={`${btnColor} text-xs border border-black rounded-lg py-3 px-4`}>{btnText}</button>
    </div>
  )
}

export default FooterSectionWithButton