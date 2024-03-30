import ItemMenu from "./ItemMenu";
import { useState } from "react";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //   console.log("jdjs", data.itemCards);
  //   const [open, setOpen] = useState(false);
  const accHandler = () => {
    // setOpen(!open);
    setShowIndex();
  };
  return (
    <div className=" w-6/12 justify-center m-auto">
      {/* Header */}
      <div className="shadow-md bg-gray-50 m-4 p-4 cursor-pointer">
        <div onClick={accHandler}>
          <div className="flex justify-between">
            <div className="font-bold text-lg">
              {data.title} ({data.itemCards.length})
            </div>
            <div>{"🔽"}</div>
          </div>
        </div>
        <div>{showItems && <ItemMenu item={data.itemCards} />}</div>
      </div>

      {/* Body */}
    </div>
  );
};

export default RestaurantCategory;
