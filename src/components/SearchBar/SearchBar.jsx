import m from "./SearchBar.module.css"
import {useState}from "react"

export default function SearchBar(props) {

   const [id,setId]=useState("")

   function handleChange(event){
      setId(event.target.value)
   }

   function handleSearch(){
      props.onSearch(id)
   }

   return (
      <div className={m.div}>
            <input type="search" placeholder="character ID to add" className={m.input} onChange={handleChange}
            value={id}
            />
            <button onClick={handleSearch} className={m.button} >Agregar</button>
      </div>
   );
}


         {/* <input type='search' />
         <button onClick={}>Agregar</button> */}
         
// module.exports={
//    idX:id
// }