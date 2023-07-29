import Header from "./components/Header"
import './styles/App.css'
import Sidebar from "./components/Sidebar"
import { useState } from "react"
import { Routes,Route } from "react-router-dom";
import Product from "./pages/Product";


const App = () => {
  
  const [collapse,setCollapse] = useState(true);
  const [ slideout, setSlideOut] = useState(true);
  return (
    <div className="app">

      <Header collapse={collapse}  setCollapse={setCollapse} setSlideOut={setSlideOut} />

      <div className={collapse ?  "sidebar-visi-anim" : "sidebar-back"} onClick={()=>{(setCollapse(!collapse)); setSlideOut(!slideout); setSlideOut(!slideout)} }>
      <div  className = { `${slideout ? '' : "slide-out"} ${collapse ? "sidebar-app" : "sidebar-app-click slide-in"}`} onClick={()=>{(setCollapse(!collapse)); setSlideOut(!slideout); setSlideOut(!slideout)}}>
      <Sidebar/>
      </div>
      </div>

      <Routes>
        <Route path="/" element={ <Product/>}/>
      </Routes>


    </div>
  )
}

export default App
