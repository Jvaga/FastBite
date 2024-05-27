import "./MenuProducts.scss";
import { NavLink } from "react-router-dom";
interface MenuProps {
  name: string;
  img: string;
  link: string;
}
const MenuProducts = (props: MenuProps) => {
  return (
    <section className="menuProducts">
      <NavLink to={props.link}>
        <div className="menuProducts__products-wrapper">
          <div className="menuProducts__product">
            <img src={props.img} alt="" />
            {props.name}
          </div>
        </div>
      </NavLink>
    </section>
  );
};

export default MenuProducts;
