import { createContext, useContext } from "react";
import dataProducts from "../data/data-products.json";

interface ProviderProps {
  children: React.ReactNode;
}

interface Pizza {
  id: number;
  group: string;
  name: string;
  ingredients: string;
  size: string;
  price: number;
  img: string;
}

interface Hamburger {
  id: number;
  group: string;
  name: string;
  ingredients: string;
  price: number;
  img: string;
}

interface HotDog {
  id: number;
  group: string;
  name: string;
  ingredients: string;
  price: number;
  img: string;
}

interface Beverage {
  id: number;
  group: string;
  name: string;
  size: string;
  price: number;
  img: string;
}

interface Menu {
  pizzas: Pizza[];
  hamburgers: Hamburger[];
  hotdog: HotDog[];
  beverages: Beverage[];
}

interface Value {
  data: Menu;
}

export const ProductsContext = createContext<Value | undefined>(undefined);

export function useDataProducts() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useDataProducts must be used inside a ProviderProducts");
  }
  return context;
}

export const ProviderProducts = ({ children }: ProviderProps) => {
  const data: Menu = dataProducts;

  const value = {
    data,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
