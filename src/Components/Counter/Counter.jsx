import { useState } from "react"
import './Counter.css'

const Counter =()=>{

    const [count, setCounter] = useState(0)
    const [counttwo, setCountertwo] = useState(0)
   
 
    return(

        <div>

     
<button class="botton1" onClick={()=>setCounter(count+1)}><h1>Likes 👍 {count}</h1></button>
<button class="botton2" onClick={()=>setCountertwo(counttwo+1)}><h1>Likes 👍 {counttwo}</h1></button>


        </div>
    )
}
export default Counter