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
  const navItems = [
    {
      name: "Search",
      img: "fi-rs-search",
      link: "/",
    },
    {
      name: "Offers",
      img: "fi-rr-badge-percent",
      link: "/",
    },
    {
      name: "help",
      img: "fi-br-interrogation",
      link: "/",
    },
    {
      name: "Sign In",
      img: "fi-rs-circle-user",
      link: "/",
    },
    {
      name: "Cart",
      img: "fi-rr-shopping-cart-add",
      link: "/Cart",
    },
  ];
  //Subscribing to the store using Selector
  const cartItem = useSelector((store) => store.cart.items);
  return (
    <div className="w-full flex justify-center sticky top-0 shadow-lg h-20 items-center">
      <div className=" w-[70%] flex justify-between">
        <div className="flex items-center gap-6">
          <Link to="/">
            <img className="h-20" alt="food-logo" src={LOGO_URL} />
          </Link>
          <ul>
            <li className="p-2 my-4 ">
              Online Status:{onlineStatus ? "✅" : "❌"}
            </li>
          </ul>
        </div>

        {/* <li className="p-2 my-4 ">
            Online Status:{onlineStatus ? "✅" : "❌"}
          </li>
          <li className="p-2 my-4 hover:bg-orange-300">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 my-4 hover:bg-orange-300">
            <Link to="/Grocery">Grocery Mart</Link>
          </li>
          <li className="font-bold p-2 my-4 hover:bg-orange-300">
            <Link to="/Cart">🛒({cartItem.length})</Link>
          </li> */}
        <div className="flex items-center gap-6">
          {navItems.map((data) => (
            <div className="flex items-center gap-2">
              <i className={"mt-1 fi " + data.img}></i>
              <Link className="text-lg" to={data.link}>
                {data.name}
              </Link>
            </div>
          ))}
        </div>
        {/* <button
            className=" p-2 my-4 hover:bg-slate-500  bg-gray-200 rounded-md "
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="p-2 my-4 hover:bg-orange-300">{loggedInUser}</li> */}
      </div>
    </div>
  );
};
export default Header;
