import "./ProductShoppingCard.scss";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useShoppingCart } from "../../../context/ShoppingCartContext";

interface CardShopingCartProps {
  id: number;
  quantity: number;
  name: string;
  price: number;
  group: string;
  img: string;
}

const ProductShoppingCard = (props: CardShopingCartProps) => {
  const totalPrice = props.price * props.quantity;
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();

  return (
    <section className="carShoppingCart">
      <div className="carShoppingCart__container">
        <div className="carShoppingCart__control">
          <div className="carShoppingCart__img">
            <img src={props.img} alt="" />
          </div>
          <div className="carShoppingCart__controls">
            <div className="carShoppingCart__plus-minus">
              <button
                onClick={() =>
                  increaseCartQuantity(
                    props.id,
                    props.price,
                    props.group,
                    props.name,
                    props.img
                  )
                }
              >
                {" "}
                <FaPlus color="#f1c231" size={10} />
              </button>
              <button
                onClick={() => decreaseCartQuantity(props.id, props.group)}
              >
                {" "}
                <FaMinus color="#f1c231" size={10} />
              </button>
            </div>
            <div className="carShoppingCart__quantity">
              <p>Quantity</p>
              {props.quantity}
            </div>
            <div>
              {" "}
              <button
                className="carShoppingCart__remove"
                onClick={() => removeFromCart(props.id, props.group)}
              >
                {" "}
                <RiDeleteBin5Line color="#f1c231" size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="carShoppingCart__info">
          <div className="carShoppingCart__name">
            <strong>{props.name}</strong>{" "}
          </div>
          <div className="carShoppingCart__unit-price">
            Price by unit: {props.price}
          </div>
          <div className="carShoppingCart__total-price">
            <strong>Total price: {totalPrice} </strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShoppingCard;
