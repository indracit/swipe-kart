import { useSelector } from "react-redux";
import '../styles/cart.css'

const Cart = () => {
    const cart = useSelector((state) => state.cart.value);

    return (
        <div className="cart-page">
            <h3>Shopping Cart</h3>
            <div className="cart-content">
            {cart.map((item)=> <div key={item.id} className="cart-item"> 
                <p>{item.title}</p>
                <div>
                <p>{item.quantity}</p>
                <p>remove</p>
                </div>
            </div>)} 
            </div>
        </div>
    )
}

export default Cart
