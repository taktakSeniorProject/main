import { Link } from "react-router-dom";
function ItemDetails({ index, title, description, quantity, price, category, img }) {
    return (
      <>
        <Link to={`/items/${index}`}>{title}</Link>
        <h1>{description}</h1>
        <img className="image" src={img} alt={title} />
        <h1>{quantity}</h1>
        <h1>{price}</h1>
        <h1>{category}</h1>
      </>
    )
  }
  
  export default ItemDetails;