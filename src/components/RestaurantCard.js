import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  // console.log(props)
  const {
    cloudinaryImageId,
    name,
    cuisines,
    area,
    costForTwo,
    deliveryTime,
    lastMileTravelString,
    costForTwoString,
    avgRatingString,
    avgRating,
    sla,
  } = props.resData?.info;
  return (
    <div className="m-4 p-4 w-80 rounded-lg hover:shadow-2xl hover:bg-gray-200 hover:scale-90">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-xl">{name}</h3>
      <div className="flex space-x-2">
        <h4>✪{avgRating}</h4>
        <h4>{sla.slaString}</h4>
      </div>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export const WithBadge = (RestaurantCard) => {
  return (props) => {
    const { aggregatedDiscountInfoV3 } = props.resData.info;
    console.log("jsjsjsj", aggregatedDiscountInfoV3, RestaurantCard);
    return (
      <>
        <div className="relative">
          <RestaurantCard {...props} />
          <h1 className="absolute bg-black text-white px-4 top-2 right-24">
            {aggregatedDiscountInfoV3.header +
              aggregatedDiscountInfoV3.subHeader}
          </h1>
        </div>
      </>
    );
  };
};

export default RestaurantCard;
