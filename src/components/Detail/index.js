import React from 'react'
import { Link } from 'react-router-dom'
import { GET_DETAIL_BY_ID } from '../../config'
import './Detail.css'

export default function Detail(props) {

    const [cocktail, setCocktail] = React.useState()

    React.useEffect(()=>{
      let id = props?.match.params.id
      getDetail(id)
    },[])

    const getDetail = async (id)=>{
        const req = await fetch(GET_DETAIL_BY_ID+id)
        const res = await req.json()
        setCocktail(res.drinks[0])
       
    }
    return (
        <div >
        
          <h5 className='div'>{cocktail?.strDrink}</h5>
          <img src = {cocktail?.strDrinkThumb}/>
          <h5 className='div'> Glass: {cocktail?.strGlass}</h5>
          <p className='div'>Instruction: {cocktail?.strInstructions}</p>
          <p className='div'>INGRIDIENT:</p>
          
          <Link to={'/Ingredient/'+ cocktail?.strIngredient1} key={cocktail?.strIngredient1}>
            <p>1.{cocktail?.strIngredient1}</p>
          </Link>
          <Link to={'/Ingredient/'+ cocktail?.strIngredient2} key={cocktail?.strIngredient2}>
            <p>2.{cocktail?.strIngredient2}</p>
          </Link>
          <Link to={'/Ingredient/'+ cocktail?.strIngredient3} key={cocktail?.strIngredient3}>
            <p>3.{cocktail?.strIngredient3}</p>
          </Link>
          <Link to={'/Ingredient/'+ cocktail?.strIngredient4} key={cocktail?.strIngredient4}>
            <p>4.{cocktail?.strIngredient4}</p>
          </Link>
         
        </div>
    )
}
