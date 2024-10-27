import React from "react";

const CustomerMind = ({ data }) => {
  console.log("data", data);
  return (
    <div>
      <h1 className="font-bold text-2xl">{data?.header?.title}</h1>
      <div className="flex overflow-x-scroll">
        {data?.imageGridCards?.info.map((cards) => (
          <img
            className="h-40 w-40"
            key={cards.id}
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
              cards.imageId
            }
            alt="card"
          />
        ))}
      </div>
      <hr className="my-10" />
    </div>
  );
};

export default CustomerMind;
