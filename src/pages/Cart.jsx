import { useSelector } from "react-redux";
import '../styles/cart.css'

const Cart = () => {
    const cart = useSelector((state) => state.cart.value);

    return (
        <div className="cart-page">
            {cart.map((item)=> <div key={item.id}> 
                <p>{item.title}</p>
                <p>{item.quantity}</p>
                <p>remove</p>
            </div>)}
        </div>
    )
}

export default Cart
