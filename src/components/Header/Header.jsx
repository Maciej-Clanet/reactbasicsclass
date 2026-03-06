import "./Header.css"
import Search from "../Search/Search"
export default function Header() {

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