const UserStory = ({text, img, status}) => {
    return ( 
        <>
        <div className="flex flex-col lg:px-4 px-1 gap-2 w-fit">
            <div className="w-[84px] h-[84px] rounded-full bg-gradient-to-t from-[#E03D96] to-[#7D4C9E] p-[2px]">
                <div className="bg-white w-full h-full rounded-full p-[3px]">
                    <img className="bg-red-500 w-full h-full rounded-full" src={img} alt="" />
                </div>
                {status=="زنده" && <div className="relative -top-4 flex justify-center">
                    <div className="bg-[#E03D96] w-fit px-2 py-1 rounded-lg text-white border-2 border-white text-xs">{status}</div>
                </div>}
                {status!="زنده" && status && <div className="relative -top-4 flex justify-center">
                    <div className="bg-[#fdecf5] w-fit px-2 py-1 rounded-lg text-[#e03e97] border-2 border-white text-xs">{status}</div>
                </div>}
            </div>
            <p className="text-xs w-[84px] text-center leading-relaxed">{text}</p>
        </div>
        </>
     );
}
 
export default UserStory;