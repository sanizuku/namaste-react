import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
//this will only display data not fetching written different hook
const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams(); //somebody has wriiten somewhere extract the data from url
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;
  // const {name}=resInfo?.cards[0]?.card?.card?.text
  const { cuisines, cloudinaryImageId, name, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  console.log(
    "ksks",
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return (
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
  console.log("itemsCards :>> ", categories);

  return (
    <>
      <div className="justify-center m-2 p-4 text-center">
        <h1 className="font-bold text-2xl">{name}</h1>
        <p className="font-bold text-md py-3">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div>
      <div>
        {categories.map((categories, index) => (
          <RestaurantCategory
            data={categories?.card?.card}
            showItems={index === showIndex && true}
            setShowIndex={() => {
              if (index == showIndex) {
                return setShowIndex(null);
              }
              setShowIndex(index);
            }}
          />
        ))}
      </div>
    </>
  );
};
export default RestaurantMenu;
