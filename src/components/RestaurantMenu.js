import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
//this will only display data not fetching written different hook
const RestaurantMenu = () => {
  const { resId } = useParams(); //somebody has wriiten somewhere extract the data from url
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;
  // const {name}=resInfo?.cards[0]?.card?.card?.text
  const { cuisines, cloudinaryImageId, name, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card;
  console.log("itemsCards :>> ", itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
        {/* <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li> */}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
