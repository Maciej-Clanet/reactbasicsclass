import "./ProductCard.css"

export default function ProductCard({
    title, description, image, link
}){

    return(
        <div className="product-card">
            <h2 className="p-title">{title}</h2>
            <img src={image} alt="product image" />
            <p className="p-desc">{description}</p>
            <a className="p-btn" href={link}>See More</a>
        </div>
    )
}