import { useEffect, useState } from "react"
import '../styles/products.css';
import ProductCategory from "./ProductCategory";
import Home from "../skeletons/Home";


const Product = () => {

    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('electronics');
    const [loading, setLoading] = useState(true);

useEffect(()=>{
    setLoading(true);
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>{ 
                setLoading(false);
                setCategories(json)});
},[])


    
    return (
        <div>

        <div className="products">
        { loading ?  <div><Home/> </div>  : categories.map((item, i)=> <div key={i} className="cat-card" onClick={()=>setCategory(item)}> 
        <p>{item}</p>
        </div>)}
        </div>

        <ProductCategory category={category}/>

        </div>
    )
}

export default Product
