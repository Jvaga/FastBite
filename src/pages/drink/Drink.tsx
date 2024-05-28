import "./Drink.scss";
import ProductCard from "../../components/cards/productCard/ProductCard";
import { useDataProducts } from "../../context/ProductsContext";

const Drink = () => {
  const data = useDataProducts();
  return (
    <section className="drinks">
      Drinks{" "}
      <div>
        <div className="drinks__grid">
          {data.data.beverages.map((item, i) => (
            <ProductCard
              key={i}
              id={item.id}
              img={item.img}
              name={item.name}
              ingredients={""}
              portions={""}
              price={item.price}
              group={item.group}
              bestseller={item.bestseller}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Drink;
