import "./ShoppingCart.scss";
import { IoCart } from "react-icons/io5";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const ShoppingCart = () => {
  const inCart = useShoppingCart();
  const { OpenCart } = useShoppingCart();
  return (
    <>
      {inCart.cartItems.length ? (
        <section onClick={() => OpenCart(true)} className="shoppingCart">
          <div className="shoppingCart__cart">
            <IoCart size={45} color="#590223" />
          </div>
          <div className="shoppingCart__quantity">
            <span>{inCart.cartQuantity}</span>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default ShoppingCart;
