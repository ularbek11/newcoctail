import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import './Output.css'

export default function Output({cocktails}) {
    return (
        <div className="cards">
            <div style={{ padding: 70 }}>
      <Grid container spacing={4}>
      {
                cocktails && cocktails.map(el=>{
                    return(
                        <div className='card'>
                        <Link  to={'/detail/' + el.idDrink} key={el.idDrink}>  
                            <img className='card'  src={el.strDrinkThumb} alt={el.strDrink}/>
                            <h5 className="world">{el.strDrink}</h5>
                        </Link>
                        </div>
                    )
                })
            } 
        
      </Grid>
    </div>
        </div>
    )
}
