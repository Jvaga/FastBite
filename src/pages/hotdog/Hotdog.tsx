import "./Hotdog.scss";
import ProductCard from "../../components/cards/productCard/ProductCard";
import { useDataProducts } from "../../context/ProductsContext";
import CarouselProducts from "../../components/carousel/CarouselProducts";
import ProductHook from "../../hooks/productHook";
import { motion } from "framer-motion";

const Hotdog = () => {
  const data = useDataProducts();
  const { variants } = ProductHook();

  return (
    <section className="hotdog">
      <h2 className="hotdog__title"> hotdog</h2>

      <div>
        <div className="hotdog__grid">
          {data.data.hotdog.map((item, i) => (
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
        <div className="hotdog__complement-meal">
          <h2 className="hotdog__title">Complement to your meal</h2>
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

export default Hotdog;
