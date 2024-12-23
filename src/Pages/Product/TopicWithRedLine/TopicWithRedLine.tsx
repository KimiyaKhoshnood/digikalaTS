const TopicWithRedLine = ({title}) => {
  return (
    <>
    <p className="py-3 font-bold">{title}</p>
    <div className="lg:block hidden h-[2px] w-[70px] bg-rose-500"></div>
    </>
  )
}

export default TopicWithRedLine