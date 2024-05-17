import { useEffect, useState } from "react"
import styles from './Search.module.css'

const URL = "https://api.spoonacular.com/recipes/complexSearch"
// const API_KEY = "260bb386e7dc4c8783f055ee4d46bfdd"
const API_KEY=import.meta.env.VITE_RECIPE_API


export default function Search({foodData,setFoodData}){
    
    const [query,setQuery] = useState("pizza")
    
    // useEffect(()=>{
        // async function fetch_data(){
        //     console.log(query)
        //     const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
        //     const data = await res.json()
        //     console.log(data.results)
        //     setFoodData(data.results)
        // }
        // fetch_data()
    // },[query])

    useEffect(()=>{
        const getData = setTimeout(()=>{
            async function fetch_data(){
                console.log(query)
                const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
                const data = await res.json()
                console.log(data.results)
                setFoodData(data.results)
            }
            fetch_data()
        },1000)
        return()=>{
            clearTimeout(getData)
        }
    },[query])
    
    return(
        <div className={styles.serachbox}>
            <input onChange={(e)=>setQuery(e.target.value)} value={query} type="text" />
        </div>
    )
}