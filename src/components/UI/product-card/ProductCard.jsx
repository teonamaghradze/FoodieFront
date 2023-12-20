import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shoppingCart/cartSlice";
import "./ProductCard.scss";
import cartIcon from "../../../assets/images/add-to-cart.png";

function ProductCard({ item }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        title: item.title,
        image01: item.image01,
        price: item.price,
      })
    );
  };

  return (
    <div className="product-card">
      <div>
        <Link to={`/foods/${item.id}`}>
          <div className="food-img">
            <img src={item.image01} alt="" />
          </div>
          <p> {item.title}</p>
        </Link>
      </div>

      <div className="price-add">
        <span>${item.price}</span>
        <button onClick={addToCart}>
          <img src={cartIcon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
