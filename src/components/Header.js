import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("header rendered");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);
  //Subscribing to the store using Selector
  const cartItem = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-orange-200 shadow-lg h-40">
      <div className="logo-container">
        <img className="h-40" alt="food-logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-2 m-4">
          <li className="p-2 my-4 ">
            Online Status:{onlineStatus ? "✅" : "❌"}
          </li>
          <li className="p-2 my-4 hover:bg-orange-300">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 my-4 hover:bg-orange-300">
            <Link to="/About">About Us</Link>
          </li>
          <li className="p-2 my-4 hover:bg-orange-300">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="p-2 my-4 hover:bg-orange-300">
            <Link to="/Grocery">Grocery Mart</Link>
          </li>
          <li className="font-bold p-2 my-4 hover:bg-orange-300">
            <Link to="/Cart">🛒({cartItem.length})</Link>
          </li>
          <button
            className=" p-2 my-4 hover:bg-slate-500  bg-gray-200 rounded-md "
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="p-2 my-4 hover:bg-orange-300">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
