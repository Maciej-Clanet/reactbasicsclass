import "./Header.css"
import Search from "../Search/Search"
import MenuIcon from "../../assets/menuicon.svg"
import { useState } from "react"

function DesktopHeader() {
    return (
        <header className="main-header">

            <div className="nav-col">
                <div className="logo">LogoText</div>
            </div>
            <div className="nav-col">
                <Search />
            </div>
            <nav className="nav-col nav-btns">
                <a className="nav-link" href="#">HOME</a>
                <a className="nav-link" href="#">ABOUT</a>
                <a className="nav-link" href="#">PRODUCTS</a>
            </nav>
        </header>
    )
}
function MobileHeader() {

    const [isOpen, setIsOpen] = useState(false)
    function toggleOpen() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="mobile-header">
            <div className="logo">LogoText</div>
            <button className="menu-btn" onClick={toggleOpen}>
                <img width="40" src={MenuIcon} alt="menu icon" />
            </button>
            {
                isOpen ? <nav className="mobile-nav">
                    <Search />
                    <a className="nav-link" href="#">HOME</a>
                    <a className="nav-link" href="#">ABOUT</a>
                    <a className="nav-link" href="#">PRODUCTS</a>
                </nav> : null
            }
        </div>
    )
}

export default function Header() {
    return (
        <>
            <DesktopHeader />
            <MobileHeader />
        </>
    )
}