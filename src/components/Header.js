import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

const [btOfLogin ,setBtnOfLogin] = useState("Login");
const onlineStatus = useOnlineStatus();
const {loggedInUser} = useContext(UserContext);
const cartItems = useSelector((store) => store.cart.items);

    return (
      <div className="flex justify-between bg-blue-100 shadow-lg">
        <div className="logo-container">
          <img
           className="w-56"
            src={LOGO_URL}/>
        </div>
  
  <div className="flex items-center">

    <ul className="flex p-4 m-4">
      <li> Online Status : { onlineStatus ? "online" : "offline" }</li>

      <li className="px-4"> 
      <Link to="/">Home </Link> </li>

      <li className="px-4"> 
      <Link to="/contact"> Contact Us </Link>  </li>

      <li className="px-4">
        <Link to="/grocery">Grocery</Link> </li>

      <li className="px-4"> 
      <Link to="/about">  About Us </Link></li>

      <li className="px-4">
  <Link to="/cart">  Cart - ({cartItems.length} items)</Link></li>

      <li className="px-4"> 
        User: {loggedInUser} </li>

       {/* <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li> */}

      <button className="login" onClick={() => {
        btOfLogin === "Login" ? 
        setBtnOfLogin("Logout") :
        setBtnOfLogin("Login")
      }}
      >
        {btOfLogin}
        </button>
    </ul>
  </div>
      </div>
    );
  };
  
  export default Header;