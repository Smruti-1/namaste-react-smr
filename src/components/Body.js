import RestaurantCard from "./RestaurantCard";
// import {witwithPromotedLabel} from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchingResName, setSearchingResName] = useState("");
  const [afterFilteredRes, setafterFilteredRes] = useState([]);
  const onlineStatus = useOnlineStatus();
  
  // const PromotedRestCArd = withPromotedLabel(RestaurantCard);
useEffect(()=> {
fetchData();
},[])
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json)
    setListOfRestaurants( json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setafterFilteredRes(json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if (onlineStatus === false) return <h1> Oops!! It seems you are offline.</h1>;

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black "
            value={searchingResName}
            onChange={(e) => {
              setSearchingResName(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 rounded-xl"
            onClick={() => {
              const searchedRestr = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase()
                .includes(searchingResName.toLowerCase()));
              setafterFilteredRes(searchedRestr);
              // setListOfRestaurants(listOfRestaurants)
            }}
            
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center ">
          <button
            className="px-4 py-1 bg-green-100 rounded-xl"
            onClick={() => {
              const filteredRestList = listOfRestaurants.filter((res) =>
               res.info.avgRating > 4);
              setListOfRestaurants(filteredRestList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {afterFilteredRes?.map((restaurants) => {
          return(
        <Link
        key={restaurants?.info.id}
        to={"/restaurant/" + restaurants?.info.id}
      >
           <RestaurantCard  resData={restaurants?.info} />
         </Link>
)})}
      </div>
      {/* <div className="flex flex-wrap">
        {afterFilteredRes.map((restaurants) => (
          <Link
            key={restaurants?.info.id}
            to={"/restaurant/" + restaurants?.info.id}
          >
            {restaurants.data.promoted ? (
              <PromotedRestCArd resData={restaurants?.info} />
             ) :(
              <RestaurantCard  resData={restaurants>,info} />
             )}
          </Link>
        ))}
      </div> */}
     
    </div>
     
  );
 
};

export default Body;
