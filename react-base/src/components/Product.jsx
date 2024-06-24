import "./Prod.css"
const Product = ({ title, description, category, price, images }) => {
    return (
        <>
            <div className="div">
                <img className="" src={images} alt="" />
                <p>{title}</p>
                <p>{description}</p>
                <h2>{category}</h2>
                <p>{price}</p>
            </div>
        </>
    )
}

export default Product