import "./Pizza.scss";
import ProductCard from "../../components/cards/productCard/ProductCard";
import { useDataProducts } from "../../context/ProductsContext";
import CarouselProducts from "../../components/carousel/CarouselProducts";
import ProductHook from "../../hooks/productHook";
import { motion } from "framer-motion";

const Pizza = () => {
  const data = useDataProducts();
  const { variants } = ProductHook();

  return (
    <section className="pizza">
      <h2 className="pizza__title">Pizzas</h2>

      <div>
        <div className="pizza__grid">
          {data.data.pizzas.map((item, i) => (
            <motion.div
              key={i}
              variants={variants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={i}
            >
              <ProductCard
                key={i}
                id={item.id}
                img={item.img}
                name={item.name}
                ingredients={item.ingredients}
                portions={""}
                price={item.price}
                group={item.group}
                bestseller={item.bestseller}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pizza__complement-meal">
        <h2 className="pizza__title">Complement to your meal</h2>
        <CarouselProducts
          data={data.data.beverages}
          title={"Drinks"}
          link={true}
          page={"drink"}
        />
      </div>
    </section>
  );
};

export default Pizza;
