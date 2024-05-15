import { useEffect } from 'react'
import styles from './Foodcard.module.css'
import RecipeDetail from './RecipeDetail'

// const URL = "https://api.spoonacular.com/recipes/"
// const API_KEY = "260bb386e7dc4c8783f055ee4d46bfdd"
// https://api.spoonacular.com/recipes/656329/information?apiKey=260bb386e7dc4c8783f055ee4d46bfdd
export default function Foodcard({foodData,foodId,setId}){

    // async function display(id){
    //     const res = await fetch(`${URL}${id}/information?apiKey=${API_KEY}`)
    //     const data = await res.json()
    //     console.log(data)
    // }


    return(
        <div className={styles.card_container}>
            <div className={styles.leftside}>
            {foodData.map((item)=><div className={styles.card} key={item.id}>
                    <div className={styles.image}>
                        <img src={item.image} alt="" />
                    </div>
                    <h3>{item.title}</h3>
                    <div className={styles.content}>
                        <button onClick={()=>setId(item.id)}><a href='#c'>View Recipe</a></button>
                    </div>
                </div>)}
            </div>
            <div>
                <RecipeDetail FoodID={foodId}/>
            </div>
        </div>
    )
}