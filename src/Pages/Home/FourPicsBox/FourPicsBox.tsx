import { useDispatch, useSelector } from "react-redux";
import FourPicItems from "./FourPicItems";
import { useEffect } from "react";
import { fetchPost } from "../../../Redux/Posts/PostReducer";

const FourPicsBox = () => {

  const { home, loading, error } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  return (
    <>
      <div className="flex justify-center p-4">
        <div className="max-w-[1336px] w-full gap-4 grid lg:grid-cols-4 grid-cols-2">
          {home?.FourPicItemsP?.map((elem) => {
            return <FourPicItems image={elem.image} key={elem.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default FourPicsBox;
