import "./Header.css"
import Search from "../Search/Search"
import MenuIcon from "../../assets/menuicon.svg";
import { useState } from "react";

function DropdownButton({ text, children }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown-nav" onMouseLeave={() => setIsOpen(false)}>
            <button onMouseEnter={() => setIsOpen(true)} className="nav-link">{text} \/</button>
            {
                isOpen ? <div className="dropdown-content">
                    {children}
                </div> : null
            }
        </div>
    )

}

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
                <DropdownButton text="categories">
                    <a className="nav-link" href="#">Fashion</a>
                    <a className="nav-link" href="#">Other idk</a>
                    <a className="nav-link" href="#">Other idk asfas sa fsaf sa</a>
                </DropdownButton>
                <a className="nav-link" href="#">HOME</a>
                <a className="nav-link" href="#">ABOUT</a>
                <a className="nav-link" href="#">PRODUCTS</a>

            </nav>
        </header>
    )
}

function MobileHeader() {

    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="mobile-header">
            <div className="nav-col">
                <div className="logo">LogoText</div>
            </div>
            <button className="menu-button" onClick={toggleOpen}>
                <img width="40" src={MenuIcon} alt="menu icon" />
            </button>

            {isOpen ? <div className="mobile-nav">
                <Search />
                <DropdownButton text="categories">
                    <a className="nav-link" href="#">Fashion</a>
                    <a className="nav-link" href="#">Other idk</a>
                    <a className="nav-link" href="#">Other idk asfas sa fsaf sa</a>
                </DropdownButton>
                <a className="nav-link" href="#">HOME</a>
                <a className="nav-link" href="#">ABOUT</a>
                <a className="nav-link" href="#">PRODUCTS</a>
            </div> : null}

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