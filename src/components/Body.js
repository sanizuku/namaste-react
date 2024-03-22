import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData"
import { useEffect, useState } from "react";
import {swiggy_api_URL} from "../utils/constants"

const Body=()=>{
    const [ListOfRestaurants,setrestaurantList]=useState([])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async () => {
         // handle the error using try... catch
   
        const response = await fetch(swiggy_api_URL);
        const json = await response.json();
         console.log(json)
        // initialize checkJsonData() function to check Swiggy Restaurant data
        async function checkJsonData(jsonData) {
          for (let i = 0; i < jsonData?.data?.cards.length; i++) {
  
            // initialize checkData for Swiggy Restaurant data
            let checkData = jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            console.log(checkData)
  
            // if checkData is not undefined then return it
            if (checkData !== undefined) {
              return checkData;
            }
          }
        }
  
        // // call the checkJsonData() function which return Swiggy Restaurant data
        const resDataa = await checkJsonData(json);
        console.log(resDataa)
  
        // update the state variable restaurants with Swiggy API data
        setrestaurantList(resDataa);
        // setFilteredRestaurants(resData);
     

    }
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filterData=ListOfRestaurants.filter((res)=>{
                      return res.info.avgRating>4.4
                       })
                           setrestaurantList(filterData)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-Container">
                {ListOfRestaurants.map((restaurant)=>{
                     return(
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>//built markup as well as logic returning jsx
                     )
                })}
                
                {/* <RestaurantCard/> */}
                
            </div>
        </div>
    )
 }
 export default Body;

