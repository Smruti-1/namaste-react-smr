// current vid
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

 const {resId} = useParams();
 const resInfo =  useRestaurantMenu(resId);
const [showIndex, setshowIndex ] = useState(null)

  if (resInfo === null) return <Shimmer />;

  const {name, cuisines,costForTwoMessage } = 
  resInfo?.cards[2]?.card?.card?.info;

  const {itemCards } =
   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ;

const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
c.card?.card?.["@type"] ===
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  return (
    <div className=" text-center">
      <h1 className=" font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg"> {cuisines.join(", ")} - {costForTwoMessage} </p>
      {categories.map((category,index)=>
        <RestaurantCategory 
        key = {category.card.card.title}
         data={category.card.card}
         showIndex = {index === showIndex ? true : false }
         setshowIndex = {()=> setshowIndex(index)}
         />
      )}
     
    </div>
  );
};

export default RestaurantMenu;














// prev vid

// const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState([null]);
 
//   const {resId} = useParams();
//   console.log(resId);

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     const data = await fetch( Menu_API + resId );
//     const json = await data.json();
//     setResInfo(json);
//   };


//   if (resInfo === null) return <Shimmer />;

//   const {name, cuisines } = 
//   resInfo?.cards[0]?.card?.card?.info;

//   const {itemCards } =
//    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ;

//   return (
//     <div className="menu">
//       <h1>{name}</h1>
//       <p>{cuisines.join(", ")}</p>

//       <h2> Menu</h2>
//       <ul>
//         {itemCards.map((item) => (
//         <li> {item.card.info.name} </li>
//         ))}
      
//       </ul>
//     </div>
//   );
// };
// export default RestaurantMenu;