import { ReactNode, createContext, useContext, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
  price: number;
  group: string;
  name: string;
  img: string;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number, group: string) => number;
  increaseCartQuantity: (
    id: number,
    price: number,
    group: string,
    name: string,
    img: string
  ) => void;
  decreaseCartQuantity: (id: number, group: string) => void;
  removeFromCart: (id: number, group: string) => void;
  OpenCart: (open: boolean) => void;
  removeAllFromCart: () => void;
  cartQuantity: number;
  cartItems: CartItem[];
  cartOpen: boolean;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const cartOpen = isOpen;

  function OpenCart() {
    setIsOpen(!isOpen);
  }

  function getItemQuantity(id: number, group: string) {
    return (
      cartItems.find((item) => item.id === id && item.group === group)
        ?.quantity || 0
    );
  }

  function increaseCartQuantity(
    id: number,
    price: number,
    group: string,
    name: string,
    img: string
  ) {
    setCartItems((currentItems) => {
      if (
        currentItems.find((item) => item.id === id && item.group === group) ==
        null
      ) {
        return [...currentItems, { id, quantity: 1, price, group, name, img }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id && item.group === group) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number, group: string) {
    setCartItems((currentItems) => {
      if (
        currentItems.find((item) => item.id === id && item.group === group)
          ?.quantity === 1
      ) {
        return currentItems.filter(
          (item) => item.id !== id || item.group !== group
        );
      } else {
        return currentItems.map((item) => {
          if (item.id === id && item.group === group) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number, group: string) {
    setCartItems((currentItems) => {
      return currentItems.filter(
        (item) => item.id !== id || item.group !== group
      );
    });
  }

  function removeAllFromCart() {
    setCartItems([]);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        OpenCart,
        removeAllFromCart,
        cartItems,
        cartQuantity,
        cartOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
