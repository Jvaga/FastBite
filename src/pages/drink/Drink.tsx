import "./Drink.scss";
import ProductCard from "../../components/cards/productCard/ProductCard";
import { useDataProducts } from "../../context/ProductsContext";
import CarouselProducts from "../../components/carousel/CarouselProducts";
import { motion } from "framer-motion";
import ProductHook from "../../hooks/productHook";

const Drink = () => {
  const data = useDataProducts();
  const { variants } = ProductHook();

  return (
    <section className="drinks">
      <h2 className="drinks__title">Drinks</h2>

      <div>
        <div className="drinks__grid">
          {data.data.beverages.map((item, i) => (
            <motion.div
              key={i}
              variants={variants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={i}
            >
              <ProductCard
                id={item.id}
                img={item.img}
                name={item.name}
                ingredients={""}
                portions={""}
                price={item.price}
                group={item.group}
                bestseller={item.bestseller}
              />
            </motion.div>
          ))}
        </div>
        <div className="drinks__complement-meal">
          <h2 className="drinks__title">Complement to your Drink</h2>
          <CarouselProducts
            data={data.data.hamburgers}
            title={"Hamburgers"}
            link={true}
            page={"hamburger"}
          />
        </div>
      </div>
    </section>
  );
};

export default Drink;
