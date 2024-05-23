import "./Drink.scss";
import ProductCard from "../../components/cards/productCard/ProductCard";
import { useDataProducts } from "../../context/productsContext";

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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Drink;
