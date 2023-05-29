import m from "./RandomButton.module.css"


export default function RandomButton
(props){

    function addRandom(){
        let e=Math.random()

        while(e*1000>827){
           e=Math.random()
        }
        props.onSearch(Math.floor(e*1000))
        //console.log(Math.floor(e*1000))
     }

    return(
        <div className={m.div}>
            <button
            className={m.button}
            onClick={addRandom}>AddRandomCharacter</button>
        </div>
    )
}