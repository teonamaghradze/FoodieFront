import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shoppingCart/cartSlice";

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
        <div>
          <Link to={`/foods/${item.id}`}>
            <img style={{ width: "100px" }} src={item.image01} alt="" />
            <p> {item.title}</p>
          </Link>
        </div>

        <div>
          <span>${item.price}</span>
          <button onClick={addToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
