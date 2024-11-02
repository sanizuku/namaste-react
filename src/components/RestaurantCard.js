import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import { joinCuisines, truncateString } from "../utils/helper";
const RestaurantCard = (props) => {
  // console.log(props);
  const {
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
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
    id,
  } = props.resData?.info;
  console.log("CUISINE", cuisines);
  return (
    <Link key={id} to={"/restaurants/" + id}>
      <div className="relative hover:scale-95 duration-300">
        <div className="">
          <div className=" min-w-[260px] h-[182px] relative">
            <img
              className="w-full h-full rounded-2xl object-cover"
              alt="res-logo"
              src={CDN_URL + cloudinaryImageId}
            />
            <div className="bg-gradient-to-t from-black from-1% to-transparent to-40%  rounded-2xl w-full h-full  absolute top-0"></div>
          </div>
          <div>
            <h3 className="text-xl truncate">{truncateString(name, 27)}</h3>
            <div className="flex space-x-2">
              <h4>✪{avgRating}</h4>
              <h4>{sla.slaString}</h4>
            </div>
            <h4 className="text-xs truncate">{joinCuisines(cuisines)}</h4>
            <h4>{costForTwo}</h4>
          </div>
        </div>
        {aggregatedDiscountInfoV3 && (
          <h1 className="absolute bottom-0 text-white text-xl ml-2 mb-24 font-bold">
            {aggregatedDiscountInfoV3.header +
              aggregatedDiscountInfoV3.subHeader}
          </h1>
        )}
      </div>
    </Link>
  );
};

// export const WithBadge = (RestaurantCard) => {
//   return (props) => {
//     const { aggregatedDiscountInfoV3 } = props.resData.info;
//     // console.log("jsjsjsj", aggregatedDiscountInfoV3, RestaurantCard);
//     return (
//       <>
//         <div className="relative">
//           <RestaurantCard {...props} />
//           <h1 className="absolute bottom-0 text-white text-2xl ml-4 mb-24 font-bold">
//             {aggregatedDiscountInfoV3.header +
//               aggregatedDiscountInfoV3.subHeader}
//           </h1>
//         </div>
//       </>
//     );
//   };
// };

export default RestaurantCard;
