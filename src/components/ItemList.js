import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    console.log(items,"iwyems")

const dispatch = useDispatch();

    const handleAdditem = (item) => {
        console.log(item)
dispatch( addItem(item));
    }

    return (
<div>
   {items.map((item)=>(
    <div
     key={item.card.info.id}
     className="p-1 m-2 border-gray-200 border-b-2 text-left flex justify-between">
        <div className="w-9/12">
<div className="py-2 ">
     <span>{item.card.info.name} </span>
     <span> 
        -₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}
        </span>
</div>
<p className="text-xs"> {item.card.info.description} </p>
        </div>
        <div className="w-3/12 p-4">
        <img className="w-9/12" src={ CDN_URL + item.card.info.imageId}/>
        <button className="p-1 bg-black text-white absolute shadow-lg rounded-lg mx-3 " onClick={() => handleAdditem(item)}>
            Add +</button>
        </div>
    </div>
   ))}
</div>
    )
}
export default ItemList;