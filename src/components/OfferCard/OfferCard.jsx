import "./OfferCard.css"
import { useState } from "react"


export default function OfferCard({title, link, children}){

    const [isOpen, setIsOpen] = useState(true)

    function toggleOpen(){
        setIsOpen(!isOpen)
    }

    return(
        <div className="offer-card">
            <h2>{title}</h2>
            {isOpen ? children : null}
            <button onClick={toggleOpen}>{ isOpen ? "show less" : "show more"}</button>
        </div>
    )
}