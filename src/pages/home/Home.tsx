import "./Home.scss";
import CarouselProducts from "../../components/carousel/CarouselProducts";
import Hero from "../../components/hero/Hero";
import { useDataProducts } from "../../context/ProductsContext";

import { getBestsellers } from "../../utilities/getBestsellers";
const Home = () => {
  const data = useDataProducts();

  const bestseller = getBestsellers(data.data);

  return (
    <section className="home">
      <Hero />
      <div className="home__bestsellers">
        <h2 className="home__title">Favourite meals of our customers</h2>
        <CarouselProducts
          data={bestseller}
          title={"Bestsellers"}
          link={false}
          page={""}
        />
      </div>
    </section>
  );
};

export default Home;
