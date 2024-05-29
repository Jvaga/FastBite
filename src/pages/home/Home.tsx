import "./Home.scss";
import CarouselProducts from "../../components/carousel/CarouselProducts";
import Hero from "../../components/hero/Hero";
import { useDataProducts } from "../../context/ProductsContext";
const Home = () => {
  const data = useDataProducts();

  const bestsellers = [
    data.data.beverages.filter((item) => item.bestseller),
    data.data.hamburgers.filter((item) => item.bestseller),
    data.data.pizzas.filter((item) => item.bestseller),
    data.data.hotdog.filter((item) => item.bestseller),
  ];

  const bestsellersArray = bestsellers.reduce(
    (acc, curr) => acc.concat(curr),
    []
  );

  const randomComparator = () => Math.random() - 0.5;

  const randombestsellersArray = bestsellersArray.sort(randomComparator);

  return (
    <section className="home">
      <Hero />
      <div className="home__bestsellers">
        <h2 className="home__title">Favourite meals of our customers</h2>
        <CarouselProducts
          data={randombestsellersArray}
          title={"Bestsellers"}
          link={false}
          page={""}
        />
      </div>
    </section>
  );
};

export default Home;
