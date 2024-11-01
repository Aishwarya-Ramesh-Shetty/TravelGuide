import React from "react"
import "../App.css"
import location from "../img/location.png"


const Card =(props)=>{
    return(
        <div className="box">
            <img src={props.img} className="mainimg"/>
            
            <img src={location} className="loc" />
            <div className="location">{props.location}</div>
            
            <div className="title">{props.title}</div>
            <div className="date">{props.date}</div>
            
                <span className="description">{props.description}</span>

           
            
            

            
            

        </div>
    )
}

export default Card;