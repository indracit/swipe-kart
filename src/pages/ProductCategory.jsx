import { useEffect, useState } from "react"
import '../styles/products.css'
import Proskeleton from "../skeletons/Proskeleton"
import PropTypes from 'prop-types'
import { useDispatch } from "react-redux"
import { increment } from "../features/cart/cartSlice";

const ProductCategory = ({category}) => {

    const [products,setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(()=>{
        setLoading(true);
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then(json=> 
                { setLoading(false);
                    setProducts(json)})
    },[category])

    return (
    <div className="product-category">

        {  loading ? [...Array(6)].map((_,i)=> <div key={i}> <Proskeleton/></div>)  : products.map((item,i)=> <div key={i} className="product-card"> 
        <img src={item.image} alt="product-image"/>
        <p>{item.title}</p>
        <div className="cart"> 
        <p>${item.price}</p>
        <p onClick={()=>dispatch(increment(item))}>Add to cart</p>
        </div>
        </div>)}
    </div>
    )
}

ProductCategory.propTypes = {
    category: PropTypes.string
}

export default ProductCategory
