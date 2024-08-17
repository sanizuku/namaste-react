import RestaurantCard, { WithBadge } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import { swiggy_api_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";

const Body = () => {
  //Local State Variable - super powerfull state variable
  const [listOfRestaurants, setrestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardBadge = WithBadge(RestaurantCard);
  console.log("BodyRendered");
  const { loggedInUser, setUserName } = useContext(userContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // handle the error using try... catch

    const response = await fetch(swiggy_api_URL);
    const json = await response.json();
    // console.log(json);
    // initialize checkJsonData() function to check Swiggy Restaurant data
    async function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        // initialize checkData for Swiggy Restaurant data
        let checkData =
          jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        // console.log(checkData)

        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    // // call the checkJsonData() function which return Swiggy Restaurant data
    const resDataa = await checkJsonData(json);
    console.log(resDataa);

    // update the state variable restaurants with Swiggy API data
    setrestaurantList(resDataa);

    setFilteredRestaurant(resDataa);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) {
    return <h1>Looks like internet not working!! Check your connection</h1>;
  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
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
        </div>
      </div>
      <div className="flex flex-wrap">
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
              {/* <RestaurantCard resData={restaurant} /> */}
            </Link> //built markup as well as logic returning jsx
          );
        })}

        {/* <RestaurantCard/> */}
      </div>
    </div>
  );
};
export default Body;
