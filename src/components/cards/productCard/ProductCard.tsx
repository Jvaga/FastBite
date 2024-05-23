import "./ProductCard.scss";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
interface CardProps {
  id: number;
  img: string;
  name: string;
  ingredients: string;
  portions: string;
  price: number;
}
const ProductCard = (props: CardProps) => {
  return (
    <section className="card">
      <div className="card__container">
        <div className="card__img">
          <img src={props.img} alt="" />
        </div>
        <div className="card-info-wrapper">
          <div className="card__info">
            <h4 className="h4">{props.name}</h4>

            <p className="p-1">
              {" "}
              {props.portions ? <strong>Información: </strong> : ""}
              {props.portions}
            </p>
            <p className="card__price">
              <strong>Price: </strong>
              {props.price}
            </p>
          </div>
          <div className="card__controls">
            <button>
              <RiDeleteBin5Line className="card__control-btn" />
            </button>
            <button>
              <FaMinus className="card__control-btn" />
            </button>
            <span className="card__quantity">quantity : </span>

            <button>
              <FaPlus className="card__control-btn" />
            </button>
          </div>
          <div className="card__see-more">
            <NavLink
              className={"card__link"}
              onClick={() => window.scrollTo(0, 0)}
              to={{
                pathname: `/product-view/${props.id}`,
              }}
              state={props.id}
            >
              <p>See more...</p>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
