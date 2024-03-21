import { CDN_URL } from "../utils/constants"
const RestaurantCard = (props) => {
    console.log(props)
    const {
        cloudinaryImageId,
        name,
        cuisines,
        area,
        costForTwo,
        deliveryTime,
        lastMileTravelString,
        costForTwoString,
        avgRating,
      }=props.resData?.data
    return(
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={CDN_URL +
          cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>₹{costForTwo/100} For Two</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>

    )
}

export default RestaurantCard;