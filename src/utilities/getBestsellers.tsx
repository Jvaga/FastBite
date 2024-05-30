import {
  Menu,
  Pizza,
  Hamburger,
  Beverage,
  HotDog,
} from "../context/ProductsContext";

export const getBestsellers = (data: Menu) => {
  const bestsellers = [
    data.beverages.filter((item: Beverage) => item.bestseller),
    data.hamburgers.filter((item: Hamburger) => item.bestseller),
    data.pizzas.filter((item: Pizza) => item.bestseller),
    data.hotdog.filter((item: HotDog) => item.bestseller),
  ];

  const bestsellersArray = bestsellers.reduce(
    (acc, curr) => acc.concat(curr),
    []
  );
  const randomComparator = () => Math.random() - 0.5;
  const randombestsellersArray = bestsellersArray.sort(randomComparator);

  return randombestsellersArray;
};
