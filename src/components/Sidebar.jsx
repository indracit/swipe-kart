import { useState } from "react";
import '../styles/sidebar.css'
const links = ['Login', 'Products', 'Services', 'Support', 'Logout'];

const Sidebar = () => {

    const [menu] = useState(links)

return (

    <div className="sidebar">

    <div>
    <h3>Swipe Kart</h3>
    </div>

    <div className="menus">
    {menu.map((item,i)=> <div  key={i}>
        <p>{item}</p>
    </div>)}
    </div>

    </div>
)
}

export default Sidebar
