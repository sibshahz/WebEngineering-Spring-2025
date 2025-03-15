import { copyHandler } from "../utils/utils";


function Logo(props){
    function clickHandler(){
        console.log("Logo was clicked")
    }

    return(
        <h1
        className={"someClass"}
        id="someId" 
        onClick={clickHandler}
        onCopy={copyHandler}
        onMouseOver={() => {
            console.log("Mouse over the logo.")
        }}
        onMouseOut={() => {
            console.log("Mouse out of logo")
        }}
        style={{fontSize: props.logoSize}}>{props.text}</h1>
    )
}

export default Logo;