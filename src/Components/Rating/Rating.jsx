import { useState } from "react"


const Rating =({rat})=>{
const[star, setStar] = useState(<h1>☆☆☆☆☆</h1>)

if(rat===1){
    setStar(<h1>★☆☆☆☆</h1>)
}
       
    return(
 
<div>


<h1>{star}</h1>
</div>
    )
}
export default Rating