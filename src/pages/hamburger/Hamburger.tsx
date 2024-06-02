import "./Hamburger.scss";
import ProductCard from "../../components/cards/productCard/ProductCard";
import { useDataProducts } from "../../context/ProductsContext";
import CarouselProducts from "../../components/carousel/CarouselProducts";
import { motion } from "framer-motion";
import ProductHook from "../../hooks/productHook";

const Hamburger = () => {
  const data = useDataProducts();
  const { variants } = ProductHook();

  return (
    <section className="hamburger">
      <h2 className="hamburger__title">Hamburger</h2>

      <div>
        <div className="hamburger__grid">
          {data.data.hamburgers.map((item, i) => (
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

        <div className="hamburger__complement-meal">
          <h2 className="hamburger__title">Complement to your meal</h2>
          <CarouselProducts
            data={data.data.beverages}
            title={"Drinks"}
            link={true}
            page={"drink"}
          />
        </div>
      </div>
    </section>
  );
};

export default Hamburger;
