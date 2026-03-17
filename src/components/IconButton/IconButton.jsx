import "./IconButton.css"
import DefaultIcon from "../../assets/react.svg"

function defaultAction(){
    alert("you forgot to give icon button an action")
}

export default function IconButton({text, icon = DefaultIcon, action = defaultAction}){

    return(
    <button onClick={action} className="icon-button">
        <img width="30" src={icon}/>
        {text}
    </button>)
}