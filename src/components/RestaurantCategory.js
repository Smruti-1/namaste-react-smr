import ItemList from "./ItemList";

const RestaurantCategory = ({data, showIndex, setshowIndex})  => {
 
const handleClick = () =>{
   setshowIndex();
}

    return (
        <div className="w-6/12 m-auto my-4 bg-gray-100 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer" 
            onClick={handleClick}
           >

            <span className=" font-bold text-lg">
                 {data.title} ({data.itemCards.length}) </span>
            <span> 0 </span>
            </div>
            {showIndex && <ItemList items={data.itemCards} />}
        </div>
    )
}

export default RestaurantCategory; 