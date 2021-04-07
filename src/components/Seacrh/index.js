import React from 'react'
import './Seacrh.css'
export default function Search({send, changeName, name}) {
    return (
        <div>
           <form onKeyUp={send}>
               <input 
               className="val"
               value={name}
               placeholder='enter name on '
                   onChange={(event)=>changeName(event.target.value)}
               />
             
           </form>
        </div>
    )
}