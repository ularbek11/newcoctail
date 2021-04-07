import React from 'react'
import './Ingredient.css'

export default function Ingredient(props) {
    const [ingredients, setIngredient] = React.useState()
    React.useEffect(()=>{
        let name = props?.match.params.ingredients
        getIngredients(name)
    }, [])
    const getIngredients = async (id) =>{
        const req = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?i="+id)
        const res = await req.json()
        setIngredient(res.ingredients[0])
    }
    return (
        <div>
        <p className='ingridient'>alcohol{ingredients?.strAlcohol}</p>
            <h5 className='ingridient'>{ingredients?.strIngredient}</h5>
            <h5 className='ingridient'>{ingredients?.strABV}</h5>
            <h5 className='ingridient'>{ingredients?.strDescription}</h5>
        </div>
    )
}

