import "./Hamburger.scss";
import ProductCard from "../../components/cards/productCard/ProductCard";
import { useDataProducts } from "../../context/ProductsContext";

const Hamburger = () => {
  const data = useDataProducts();
  return (
    <section className="hamburger">
      Hamburger{" "}
      <div>
        <div className="hamburger__grid">
          {data.data.hamburgers.map((item, i) => (
            <ProductCard
              key={i}
              id={item.id}
              img={item.img}
              name={item.name}
              ingredients={item.ingredients}
              portions={""}
              price={item.price}
              group={item.group}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hamburger;
