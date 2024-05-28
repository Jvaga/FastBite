import "./ProductView.scss";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Menu, useDataProducts } from "../../context/ProductsContext";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { CURRENCY_FORMATTER } from "../../utilities/formatCurrency";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const ProductView = () => {
  const data = useDataProducts();
  const location = useLocation();
  const productstate = location.state;
  const str = productstate;
  const [productIdString, productGroups] = str.split("/");

  const productIdtoNumber = Number(productIdString);

  function findProductByIdAndGroup(menu: Menu, id: number, group: keyof Menu) {
    if (menu[group]) {
      return menu[group].find((product) => product.id === id);
    } else {
      return null;
    }
  }

  const productId = productIdtoNumber;
  const productGroup: keyof Menu = productGroups;
  const foundProduct = findProductByIdAndGroup(
    data.data,
    productId,
    productGroup
  );
  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    getItemQuantity,
  } = useShoppingCart();
  const isProductId = productId;
  const isProductgroup = productGroup;
  const quantity = getItemQuantity(productId, productGroup);

  return (
    <section className="productView">
      <div className="productView__container">
        <div className="productView__details">
          <div className="productView__img">
            <img src={foundProduct?.img} alt="" />
          </div>
          <div className="productView__info-wrapper">
            <div className="productView__info">
              <div>
                <h3>{foundProduct?.name}</h3>
              </div>
              <div>
                Precio:{" "}
                {CURRENCY_FORMATTER.format(
                  foundProduct?.price !== undefined ? foundProduct?.price : 0
                )}
              </div>

              <div className="productView__controls">
                <button
                  onClick={() => removeFromCart(isProductId, isProductgroup)}
                >
                  <RiDeleteBin5Line
                    className="productView__fa"
                    color="#f1c231"
                  />
                </button>
                <button
                  onClick={() =>
                    decreaseCartQuantity(isProductId, isProductgroup)
                  }
                >
                  <FaMinus className="productView__fa" color="#f1c231" />
                </button>
                <span>cantidad {quantity}</span>

                <button
                  onClick={() =>
                    increaseCartQuantity(
                      foundProduct?.id ? foundProduct.id : 0,
                      foundProduct?.price ? foundProduct.price : 0,
                      foundProduct?.group ? foundProduct.group : "",
                      foundProduct?.name ? foundProduct.name : "",
                      foundProduct?.img ? foundProduct.img : "",
                      foundProduct?.bestseller ? foundProduct.bestseller : false
                    )
                  }
                >
                  <FaPlus className="productView__fa" color="#f1c231" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="productView__ingredients">
          <h2>Ingredientes</h2>
          {foundProduct?.ingredients}
        </div>
      </div>
    </section>
  );
};

export default ProductView;
