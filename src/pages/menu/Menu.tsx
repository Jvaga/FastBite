import "./Menu.scss";
import MenuProducts from "../../menuProducts/MenuProducts";
import data from "../../data/data-products-menu.json";

const Menu = () => {
  return (
    <div className="menu">
      Menu
      <div className="menu__grid">
        {data.map((item, i) => (
          <MenuProducts
            key={i}
            name={item.name}
            img={item.img}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
