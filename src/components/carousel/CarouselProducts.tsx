import { NavLink } from "react-router-dom";
import "./CarouselProducts.scss";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import {
  Pizza,
  Hamburger,
  HotDog,
  Beverage,
} from "../../context/ProductsContext";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
type MenuItem = Pizza | Hamburger | HotDog | Beverage;

type CarouselProps = {
  data: MenuItem[];
};

const CarouselProducts = (props: CarouselProps) => {
  const pizza = props.data;
  const group = pizza.length > 0 ? pizza[0].group : "No group";

  function capitalizeFirstLetter(str: string): string {
    const capitalizedString = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalizedString + "s";
  }

  const checkIfDrink = group == "beverage" ? "drink" : group;
  return (
    <section className="carousel">
      <div className="carousel__container">
        <div className="carousel__text">
          <h2 className="h2">{capitalizeFirstLetter(group)}</h2>
        </div>
        <Carousel responsive={responsive} infinite={true} autoPlay={true}>
          {pizza.map((item, i) => (
            <div key={i} className="carousel__card">
              <div className="carousel__img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="carousel__info-wrapper">
                <h4 className="h4">{item.name}</h4>
                <div className="carousel__info">
                  {" "}
                  {item.size.length > 0 ? (
                    <p className="p-1">
                      <strong>Size </strong>
                      {item.size}
                    </p>
                  ) : (
                    ""
                  )}
                  {item.ingredients.length > 0 ? (
                    <p className="carousel__ingredients">
                      <span>Ingredients: </span>
                      {item.ingredients}
                    </p>
                  ) : (
                    ""
                  )}
                  <p className="carousel__price">
                    <strong>Price: </strong>
                    {item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="carousel__btn">
          <NavLink
            to={`../${checkIfDrink}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <button className="button-primary">
              Go to {capitalizeFirstLetter(group)}
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CarouselProducts;
