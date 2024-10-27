import React from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const TopRestaurant = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="flex mt-4 gap-5 w-full duration-300 overflow-x-scroll">
        {data &&
          data.map((info) => <RestaurantCard key={info?.id} resData={info} />)}
      </div>
      <hr className="my-10" />
    </>
  );
};

export default TopRestaurant;
