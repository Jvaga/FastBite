import { NavLink } from "react-router-dom";
import "./CarouselProducts.scss";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { CURRENCY_FORMATTER } from "../../utilities/formatCurrency";

import {
  Pizza,
  Hamburger,
  HotDog,
  Beverage,
} from "../../context/ProductsContext";
import { motion } from "framer-motion";
import CarouselHook from "../../hooks/carouselHook";

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
  title: string;
  link: boolean;
  page: string;
};

const CarouselProducts = (props: CarouselProps) => {
  const data = props.data;
  const { variants } = CarouselHook();

  return (
    <section className="carousel">
      <div className="carousel__container">
        <div className="carousel__text">
          <h2 className="h2">{props.title}</h2>
        </div>
        <Carousel responsive={responsive} infinite={true} autoPlay={true}>
          {data.map((item, i) => (
            <motion.div
              key={i}
              className="carousel__card"
              variants={variants}
              initial="initial"
              whileInView="animate"
            >
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
                    {CURRENCY_FORMATTER.format(item.price)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </Carousel>
        {props.link ? (
          <div className="carousel__btn">
            <NavLink
              to={`../${props.page}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              <button className="button-primary">Go to {props.title}</button>
            </NavLink>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default CarouselProducts;
