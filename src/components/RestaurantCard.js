import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    const {resData} = props;
    const
     {name,
      cuisines,
      avgRating,
      areaName,
      } = resData ;
      
    return (
  <div
   className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300 ">
    <img className="rounded-lg"
    alt= "res-logo"
    src= { CDN_URL + resData.cloudinaryImageId}/>
    <h3 className=" font-bold py-4 text-lg"> {name}</h3>
    <h4>{cuisines.join(", ")}</h4>
    <h4>{avgRating} stars</h4>
    <h4> {areaName}</h4>
  {/* <h4>₹{costForTwo / 100} FOR TWO</h4> */}
  </div>
    );
  };
  
//  export const withPromotedLabel = (RestaurantCard) => {
//     return () => {
//       return (
//         <div>
//          <label>Promoted</label>
//          <RestaurantCard />
//         </div>
//       )
//     }
//   }

  export default RestaurantCard;