import "./Menu.scss";
import MenuProducts from "../../menuProducts/MenuProducts";
import dataMenu from "../../data/data-products-menu.json";
import { useDataProducts } from "../../context/ProductsContext";
import { getBestsellers } from "../../utilities/getBestsellers";
import CarouselProducts from "../../components/carousel/CarouselProducts";
import { motion } from "framer-motion";

const Menu = () => {
  const data = useDataProducts();
  const bestseller = getBestsellers(data.data);

  return (
    <div className="menu">
      <h2 className="menu__title">Menu</h2>

      <div className="menu__grid">
        {dataMenu.map((item, i) => (
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <MenuProducts
              key={i}
              name={item.name}
              img={item.img}
              link={item.link}
            />
          </motion.div>
        ))}
      </div>

      <div className="home__bestsellers">
        <h2 className="home__title">Favourite meals of our customers</h2>
        <CarouselProducts
          data={bestseller}
          title={"Bestsellers"}
          link={false}
          page={""}
        />
      </div>
    </div>
  );
};

export default Menu;
