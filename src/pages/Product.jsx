import { useEffect, useState } from "react"
import '../styles/products.css';

const Product = () => {

    const [categories, setCategories]= useState([]);

useEffect(()=>{
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=> setCategories(json))
},[])
    
    return (
        <div className="products">
        {categories.map((item, i)=> <div key={i}> 
        <p>{item}</p>
        </div>)}
        </div>
    )
}

export default Product
