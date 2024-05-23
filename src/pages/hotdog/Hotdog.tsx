import "./Hotdog.scss";
import ProductCard from "../../components/cards/productCard/ProductCard";
import { useDataProducts } from "../../context/productsContext";

const Hotdog = () => {
  const data = useDataProducts();
  return (
    <section className="hotdog">
      hotdog{" "}
      <div>
        <div className="hotdog__grid">
          {data.data.hotdogs.map((item, i) => (
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

export default Hotdog;
