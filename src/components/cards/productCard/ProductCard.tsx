import "./ProductCard.scss";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../../../context/ShoppingCartContext";

interface CardProps {
  id: number;
  img: string;
  name: string;
  ingredients: string;
  portions: string;
  price: number;
  group: string;
}

const ProductCard = (props: CardProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(props.id, props.group);

  return (
    <section className="card">
      <div className="card__container">
        <div className="card__img">
          <img src={props.img} alt={props.name} />
        </div>
        <div className="card-info-wrapper">
          <div className="card__info">
            <h4 className="h4">{props.name}</h4>
            <p className="p-1">
              {props.portions ? <strong>Información: </strong> : ""}
              {props.portions}
            </p>
            <p className="card__price">
              <strong>Price: </strong>
              {props.price}
            </p>
          </div>
          <div className="card__controls">
            <button onClick={() => removeFromCart(props.id, props.group)}>
              <RiDeleteBin5Line className="card__control-btn" />
            </button>
            <button onClick={() => decreaseCartQuantity(props.id, props.group)}>
              <FaMinus className="card__control-btn" />
            </button>
            <span className="card__quantity">Quantity: {quantity}</span>
            <button
              onClick={() =>
                increaseCartQuantity(
                  props.id,
                  props.price,
                  props.group,
                  props.name
                )
              }
            >
              <FaPlus className="card__control-btn" />
            </button>
          </div>
          <div className="card__see-more">
            <NavLink
              className={"card__link"}
              onClick={() => window.scrollTo(0, 0)}
              to={`/product-view/${props.group}/${props.id}`}
            >
              <p>See more...</p>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
