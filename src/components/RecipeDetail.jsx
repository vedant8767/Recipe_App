import { useEffect, useState } from "react"
import styles from "./RecipeDetail.module.css"
import Ingredients from "./Ingredients"

const URL = "https://api.spoonacular.com/recipes/"
// const API_KEY = "260bb386e7dc4c8783f055ee4d46bfdd"
const API_KEY=import.meta.env.VITE_RECIPE_API

export default function RecipeDetail({FoodID}){
    
    const [foodrecipe,setFoodRecipe] = useState({})

    const [isloading,setloading] = useState(true)

    useEffect(()=>{
        async function fetch_recipe(){
            const res = await fetch(`${URL}${FoodID}/information?apiKey=${API_KEY}`)
            const data = await res.json()
            console.log(data)
            setFoodRecipe(data)
            setloading(false)
        }
        fetch_recipe()
    },[FoodID])

    return(
        <div id="c" className={styles.fooddetailcard}>
            {/* Food Details {FoodID} */}
            <div className={styles.main}>
                <h1>{foodrecipe.title}</h1>
                <img src={foodrecipe.image} alt=""/>
            </div>
            <div className={styles.submain}>
                <span>
                    <b>Time Required : {foodrecipe.readyInMinutes} Minutes</b>
                </span>
                <span>
                    <b>Serves : {foodrecipe.servings}</b>
                </span>
                <span>
                    <b>{foodrecipe.vegetarian? "Vegetarain" : "Non Vegetarain"}</b>
                </span>
            </div>
            <div>
                <Ingredients isloading={isloading} foodrecipe={foodrecipe}/>
            </div>
            <div className={styles.instructions}>
                <h2>Instructions</h2> 
                {isloading ? ("Loading") :(foodrecipe.analyzedInstructions[0].steps.map((step)=>(<li key={step.number}>{step.step}</li>)))}
            </div>
        </div>
    )
}