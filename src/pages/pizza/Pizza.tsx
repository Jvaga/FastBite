import "./Pizza.scss";
import ProductCard from "../../components/cards/productCard/ProductCard";
import { useDataProducts } from "../../context/productsContext";

const Pizza = () => {
  const data = useDataProducts();
  return (
    <section className="pizza">
      Pizza{" "}
      <div>
        <div className="pizza__grid">
          {data.data.pizzas.map((item, i) => (
            <ProductCard
              key={i}
              id={item.id}
              img={item.img}
              name={item.name}
              ingredients={item.ingredients}
              portions={""}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pizza;
