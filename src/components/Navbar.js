import React from "react"
import "../App.css"
import logo from "../img/logo.jpg"


const Navbar =()=>{
    return(
        <div className="nav">
            <img src={logo} className="img-logo" />
            <h1 className="heading">TravelGuide</h1>

        </div>
    )
}

export default Navbar;