import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData"
import { useEffect, useState } from "react";
import {swiggy_api_URL} from "../utils/constants"
import Shimmer from "./Shimmer";

const Body=()=>{
  //Local State Variable - super powerfull state variable
    const [listOfRestaurants,setrestaurantList]=useState([])
    const [filteredRestaurant,setFilteredRestaurant]=useState([])
    const [searchText,setSearchText]=useState("")
    console.log("BodyRendered")
    
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
         // handle the error using try... catch
   
        const response = await fetch(swiggy_api_URL);
        const json = await response.json();
        //  console.log(json)
        // initialize checkJsonData() function to check Swiggy Restaurant data
        async function checkJsonData(jsonData) {
          for (let i = 0; i < jsonData?.data?.cards.length; i++) {
  
            // initialize checkData for Swiggy Restaurant data
            let checkData = jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            // console.log(checkData)
  
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

        setFilteredRestaurant(resDataa);
     

    }

    return listOfRestaurants.length===0?<Shimmer/>:(
        <div className="body">
            <div className="filter">
              <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                     setSearchText(e.target.value);
                    //  const SearchedData =   listOfRestaurants.filter(res=>
                    //   res.info.name.toLowerCase().includes(e.target.value.toLowerCase())
                        
                    //     )
                    //     setFilteredRestaurant(SearchedData)
                }}></input>
                <button onClick={()=>{
                  //filter the restaurant cards and update the UI
                  //searchText
                  console.log(searchText);
                  const SearchedData =   listOfRestaurants.filter(res=>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  
                  )
                  setFilteredRestaurant(SearchedData)
                }}>Search</button>
              </div>
                <button className="filter-btn" onClick={()=>{
                    const filterData=listOfRestaurants.filter((res)=>{
                      return res.info.avgRating>4.4
                       })
                       setFilteredRestaurant(filterData)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-Container">
                {filteredRestaurant.map((restaurant)=>{
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

