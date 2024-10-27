import RestaurantCard, { WithBadge } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import { swiggy_api_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";
import CustomerMind from "./CustomerMind";
import { checkJsonData } from "../utils/helper";
import TopRestaurant from "./TopRestaurant";

const Body = () => {
  //Local State Variable - super powerfull state variable
  const [data, setData] = useState([]);
  const [header, setHeader] = useState();
  const [listOfRestaurants, setrestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [gridImages, setGridImages] = useState([]);
  const RestaurantCardBadge = WithBadge(RestaurantCard);
  console.log("BodyRendered");
  const { loggedInUser, setUserName } = useContext(userContext);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) {
    return <h1>Looks like internet not working!! Check your connection</h1>;
  }
  const fetchData = async () => {
    // handle the error using try... catch

    const response = await fetch(swiggy_api_URL);
    const json = await response.json();
    console.log(json);
    setGridImages(json?.data?.cards[0]?.card?.card);
    setHeader(json?.data?.cards[1]?.card?.card?.header);
    setData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json?.data?.cards[1]?.card?.card?.header);
    // // call the checkJsonData() function which return Swiggy Restaurant data
    const resDataa = await checkJsonData(json);
    console.log(resDataa);

    // update the state variable restaurants with Swiggy API data
    setrestaurantList(resDataa);

    setFilteredRestaurant(resDataa);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex-1 overflow-y-scroll w-full">
      {gridImages && (
        <div className="flex w-[75%] mx-auto mt-2">
          <CustomerMind data={gridImages} />
        </div>
      )}
      <div className="w-full px-10 sm:w-[90%] lg:w-[80%] mx-auto mt-3 overflow-hidden">
        <h1 className="font-bold text-2xl">{header?.title}</h1>
        <TopRestaurant data={data} />

        {/* <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              //  const SearchedData =   listOfRestaurants.filter(res=>
              //   res.info.name.toLowerCase().includes(e.target.value.toLowerCase())

              //     )
              //     setFilteredRestaurant(SearchedData)
            }}
          ></input>
          <button
            className="px-3 py-1.5 m-4 bg-orange-200 hover:bg-orange-300 rounded-lg"
            onClick={() => {
              //filter the restaurant cards and update the UI
              //searchText
              console.log(searchText);
              const SearchedData = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(SearchedData);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex">
          <div>
            <button
              className="px-3 py-1.5 m-4 bg-orange-200 hover:bg-orange-300 rounded-lg"
              onClick={() => {
                const filterData = listOfRestaurants.filter((res) => {
                  return res.info.avgRating > 4.4;
                });
                setFilteredRestaurant(filterData);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>

          <div className="my-1 p-2">
            <label className="px-1">UserName :</label>
            <input
              type="text"
              className=" p-2 border border-solid border-black"
              value={loggedInUser}
              onChange={(e) => {
                setUserName(e.target.value);
                // setSearchText(e.target.value);
                //  const SearchedData =   listOfRestaurants.filter(res=>
                //   res.info.name.toLowerCase().includes(e.target.value.toLowerCase())

                //     )
                //     setFilteredRestaurant(SearchedData)
              }}
            ></input>
          </div>
        </div> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 w-[75%] mx-auto">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.aggregatedDiscountInfoV3 ? (
                <RestaurantCardBadge resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link> //built markup as well as logic returning jsx
          );
        })}
      </div>
    </div>
  );
};
export default Body;
