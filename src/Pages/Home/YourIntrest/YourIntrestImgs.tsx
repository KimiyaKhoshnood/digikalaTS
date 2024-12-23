import { Link } from "react-router-dom"
import BlueLinkWithLeftArrow from "../../../Components/BlueLinkWithLeftArrow/BlueLinkWithLeftArrow"

const YourIntrestImgs = ({eachIntrest}) => {
  return (
    <>
    {/* title does not exist */}
    <div className="px-5 py-2 leading-loose">
        <h4>{eachIntrest.title}</h4>
        <p className="text-gray-500 text-[11px]">بر اساس سلیقه شما</p>
            <div className="grid grid-cols-2 [&>*:nth-child(4n-1)]:border-t [&>*:nth-child(4n)]:border-t">
                {
                    eachIntrest.images.map((elem)=>{      
                        return <Link to={`/product?${elem.title}`} className="p-2 flex odd:border-l justify-center" key={elem.id}><img className="max-w-[300px] w-full" src={elem.img} alt="" /></Link>
                    })
                }
            </div>
        <div className="w-full text-center"><BlueLinkWithLeftArrow text={"مشاهده همه"} size={"text-[11px]"}/></div>
    </div>
    </>
  )
}

export default YourIntrestImgs