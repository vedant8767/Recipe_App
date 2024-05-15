import styles from './Ingredients.module.css'

export default function Ingredients({isloading,foodrecipe}){
    return(<div className={styles.mainind}>
        <h2>Ingredients</h2>
        {isloading ? "Loading" : (foodrecipe.extendedIngredients.map((item)=>(<div className={styles.ind} key={item.id}>
                    <img src={`https://spoonacular.com/cdn/ingredients_100x100/`+item.image} alt="" />
                    <div className={styles.ved}>
                        <h3>{item.name}</h3>
                        <h4>{item.amount} {item.unit}</h4>
                    </div>
                </div>)))}
    </div>
    )
}