import React from "react"
import "./App.css"
import Hero from "../src/components/Hero"
import Navbar from "../src/components/Navbar"
import Footer from "../src/components/Footer"
import Card from "../src/components/Card"
import data from "./data"


 function App() {
  const cards=data.map(item =>{
    return(
      <Card
        img={item.img}
        title={item.title}
        date={item.date}
        description={item.description}
        location={item.location}
      />
    )
    
  })
  return(
    <div>
      <Navbar/>
      <Hero/>
      {cards}
      <Footer/>

    </div>
  )
 }

 export default App;