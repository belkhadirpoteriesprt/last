import { createContext, useContext, useReducer, ReactNode } from "react";
import type { Product } from "../data/products";

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  sizeVariantId: string;
  patternId: string;
  variantPrice: number;
  variantName: string;
}

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | {
      type: "ADD_ITEM";
      payload: {
        product: Product;
        quantity: number;
        sizeVariantId: string;
        patternId: string;
        variantPrice: number;
        variantName: string;
      };
    }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" };

const initialState: CartState = {
  items: [],
  total: 0,
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const {
        product,
        quantity,
        sizeVariantId,
        patternId,
        variantPrice,
        variantName,
      } = action.payload;
      const itemId = `${product.id}-${sizeVariantId}-${patternId}`;

      const existingItemIndex = state.items.findIndex(
        (item) => item.id === itemId,
      );

      let newItems;
      if (existingItemIndex >= 0) {
        // Update existing item quantity
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      } else {
        // Add new item
        const newItem: CartItem = {
          id: itemId,
          product,
          quantity,
          sizeVariantId,
          patternId,
          variantPrice,
          variantName,
        };
        newItems = [...state.items, newItem];
      }

      const total = newItems.reduce(
        (sum, item) => sum + item.variantPrice * item.quantity,
        0,
      );

      return {
        items: newItems,
        total,
      };
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter((item) => item.id !== action.payload);
      const total = newItems.reduce(
        (sum, item) => sum + item.variantPrice * item.quantity,
        0,
      );

      return {
        items: newItems,
        total,
      };
    }

    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;
      const newItems = state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      );
      const total = newItems.reduce(
        (sum, item) => sum + item.variantPrice * item.quantity,
        0,
      );

      return {
        items: newItems,
        total,
      };
    }

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
}

interface CartContextType {
  state: CartState;
  addItem: (
    product: Product,
    quantity: number,
    sizeVariantId: string,
    patternId: string,
    variantPrice: number,
    variantName: string,
  ) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (
    product: Product,
    quantity: number,
    sizeVariantId: string,
    patternId: string,
    variantPrice: number,
    variantName: string,
  ) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        product,
        quantity,
        sizeVariantId,
        patternId,
        variantPrice,
        variantName,
      },
    });
  };

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
    } else {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
    }
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const getItemCount = () => {
    return state.items.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
