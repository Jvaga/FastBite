import CarouselProducts from "../../components/carousel/CarouselProducts";
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
    <div>
      Home
      <div>
        <CarouselProducts
          data={randombestsellersArray}
          title={"Bestsellers"}
          link={false}
          page={""}
        />
      </div>
    </div>
  );
};

export default Home;
