import React, {useEffect, useState} from 'react'
import Search from '../Seacrh'
import Output from '../Output'
import { GET_ALL_COCKTAILS, GET_COCKTAILS_BY_NAME } from '../../config'
export default function Home() {
    const [name, setName] = useState()
    const [cocktails, setCocktails] = useState()


    useEffect(()=>{
        getAllCocktails()
    },[])

    const getCoctail= async (event)=>{
        event.preventDefault()
        let req = await fetch( GET_COCKTAILS_BY_NAME+name)
        let resp= await req.json()
        console.log(resp.drinks)
        setCocktails(resp.drinks)
       
      }

    const getAllCocktails = async()=>{
        
        const req = await fetch(GET_ALL_COCKTAILS)
        const res = await req.json()
        setCocktails(res.drinks)
    }

    return (
        <div>
           <Search
        name={name}
       changeName= {setName}
        send = {getCoctail}
     
      />
      <Output
      cocktails={cocktails}
    />
        </div>
    )
}
