const PriceWithToman = ({price , textSize}) => {
  return (
    <div className="flex gap-1 items-center">
      <span className={`${textSize}`}>{price}</span>
      <img
        className="w-[20px] h-[20px]"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTAjW86KHVtGKOts1_vzW0oM03BOSx5djx5Q&s"
        alt=""
      />
    </div>
  );
};

export default PriceWithToman;
