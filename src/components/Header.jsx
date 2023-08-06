import '../styles/Header.css';
import {RiShoppingCart2Line} from 'react-icons/ri'
import {IoMenu} from 'react-icons/io5'
import PropTypes  from 'prop-types';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Header = ({collapse, setCollapse , setSlideOut}) => {

    const cart = useSelector((state)=>state.cart.value)
    const [cartValue, setCartValue] = useState(0);

    useEffect(()=>{
        // console.log(cart);
        if(cart.length){
            let count =  cart.reduce((total,item)=> total + item.quantity,0)
            setCartValue(count)
        }
        else{
            setCartValue(0)
        }

    },[cart])
    return (
    <div className='header'>
    <div>
    <IoMenu style={{fontSize:'20px'}} onClick={()=>{setCollapse(!collapse); setSlideOut(true)}}/>
    </div>
    <div>
    <Link to= '/' className='link'>
    <h3>Swipe Kart</h3>
    </Link>
    </div>
    <div>
    <Link to= '/cart' className='link'>
    <RiShoppingCart2Line style={{fontSize:'18px'}}/>
    { cartValue  ? cartValue : ''}
    </Link>
    </div>
    </div>
    )
}

Header.propTypes = {
    collapse : PropTypes.bool,
    setCollapse : PropTypes.func,
    setSlideOut : PropTypes.func
}

export default Header
