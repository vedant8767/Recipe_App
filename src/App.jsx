import Foodcard from "./components/Foodcard"
import Header from "./components/Header"
import Search from "./components/Search"
import { useState } from "react"
import './App.css'

export default function App() {

  const [foodData,setFoodData] = useState([])

  const [foodId,setId] = useState("656329")

  return (
    <div className="App">
      <Header/>
      <Search foodData={foodData} setFoodData={setFoodData}/>
      <Foodcard foodData={foodData} foodId={foodId} setId={setId}/>
    </div>
  )
}


