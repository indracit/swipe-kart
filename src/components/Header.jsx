import '../styles/Header.css';
import {RiShoppingCart2Line} from 'react-icons/ri'
import {IoMenu} from 'react-icons/io5'

const Header = ({collapse, setCollapse , setSlideOut}) => {
    return (
    <div className='header'>
    <div>
    <IoMenu style={{fontSize:'20px'}} onClick={()=>{setCollapse(!collapse); setSlideOut(true)}}/>
    </div>
    <div>
    <h3>Swipe Kart</h3>
    </div>
    <div>
    <RiShoppingCart2Line style={{fontSize:'18px'}}/>
    </div>
    
    </div>
    )
}

export default Header
