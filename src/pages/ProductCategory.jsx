import { useEffect, useState } from "react"
import '../styles/products.css'
import Proskeleton from "../skeletons/Proskeleton"

const ProductCategory = ({category}) => {

    const [products,setProducts] = useState([])
    const [loading, setLoading] = useState(true);

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
        <p>Add to cart</p>
        </div>
        </div>)}
    </div>
    )
}

export default ProductCategory
