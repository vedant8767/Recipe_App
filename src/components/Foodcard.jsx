import { useEffect } from 'react'
import styles from './Foodcard.module.css'
import RecipeDetail from './RecipeDetail'


export default function Foodcard({foodData,foodId,setId}){

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