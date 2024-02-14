import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearItem());
    }
    const cartItems = useSelector((store) => store.cart.items)
    return (
        <div className="text-center m-4 p-4">
         <h1 className="text-2xl font-bold">Cart</h1>
         <div className="w-6/12 m-auto p-4">
            <button className="bg-black text-white m-2 p-2 rounded-lg" onClick={handleClearCart}>
                Clear Cart</button>
            {cartItems?.length === 0 && 
           ( <h1 className=" font-semibold p-4">Looks like your Cart is empty.</h1>)}
            <ItemList items = {cartItems}/>
        </div>
        </div>
    )
}

export default Cart;