import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData"
import { useState } from "react";

const Body=()=>{
    const [ListOfRestaurants,setrestaurantList]=useState(restaurantList)
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filterData=ListOfRestaurants.filter((res)=>{
                      return res.data.avgRating>4
                       })
                           setrestaurantList(filterData)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-Container">
                {ListOfRestaurants.map((restaurant)=>{
                     return(
                        <RestaurantCard key={restaurant.data.id} resData={restaurant}/>//built markup as well as logic returning jsx
                     )
                })}
                
                {/* <RestaurantCard/> */}
                
            </div>
        </div>
    )
 }
 export default Body;

