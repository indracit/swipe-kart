import { useSelector,useDispatch } from "react-redux";
import '../styles/cart.css';
import { increment,decrement,remove } from "../features/cart/cartSlice";

const Cart = () => {
    const cart = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();

    return (
        <div className="cart-page">
            <h3>Shopping Cart</h3>
            <div className="cart-content">
            {cart.length ===0 ? 'your cart is empty' : '' }
            {cart.map((item,index)=> <div key={item.id} className="cart-item"> 
                <p>{item.title}</p>
                <div className="cart-remove">
                <p> Quantity - {item.quantity}</p>
                    <div className="cart-quantity">
                    <button onClick={()=> dispatch(decrement(item))}>-</button>
                    <button onClick={()=> dispatch(increment(item))}>+</button>
                    <button onClick={()=> dispatch(remove(index))}>remove</button>
                    </div>
                </div>
            </div>)} 
            </div>
        </div>
    )
}

export default Cart
