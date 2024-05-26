import { useEffect } from "react";
import "./CanvasShopping.scss";
import { IoCloseSharp } from "react-icons/io5";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import ProductShoppingCard from "../cards/productShoppingCard/ProductShoppingCard";

const CanvasShopping = () => {
  const { cartOpen, cartQuantity, OpenCart, cartItems } = useShoppingCart();

  useEffect(() => {
    if (cartQuantity === 0 && cartOpen) {
      OpenCart(false);
    }
  }, [cartQuantity, cartOpen, OpenCart]);

  return (
    <section className={cartOpen ? "canvasShoppingCart" : "noDispay"}>
      <button
        className="canvasShoppingCart__close"
        onClick={() => OpenCart(false)}
      >
        <IoCloseSharp size={30} color="#f1c231" />
      </button>
      <h2>Tu Pedido</h2>
      {cartItems.map((item, i) => (
        <ProductShoppingCard
          key={i}
          id={item.id}
          quantity={item.quantity}
          name={item.name}
          price={item.price}
          group={item.group}
          img={item.img}
        />
      ))}
    </section>
  );
};

export default CanvasShopping;
