import "./Search.css"

export default function Search() {

    return (
        <form className="search">
            <input required placeholder="search..." />
            <button type="submit">FIND</button>
        </form>
    )
}