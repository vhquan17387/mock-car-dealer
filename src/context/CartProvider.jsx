import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultContext = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  const { type, data } = action;

  switch (type) {
    case "ADD":
      let newItems, totalQt, totalAmt;

      // check if cart empty, add
      let itemIndex = state.items.findIndex((item) => item.id === data.id);
      let currentItem = state.items[itemIndex];

      if (itemIndex !== -1) {
        // update existing item count and cart total quantity
        let updatedItem = {
          ...currentItem,
          qt: currentItem.qt + data.qt,
        };
        // copy items array
        newItems = [...state.items];
        newItems[itemIndex] = updatedItem;
      } else {
        newItems = [...state.items, data];
      }

      totalQt = state.totalQuantity + data.qt;
      totalAmt = state.totalAmount + data.currentPrice * data.qt;

      return {
        ...state,
        items: newItems,
        totalQuantity: totalQt,
        totalAmount: totalAmt,
      };
    case "REMOVE":
      let { item: selectedItem, subtype } = data;
      // check if item exists
      let index = state.items.findIndex((item) => item.id === selectedItem.id);
      let current = state.items[index];

      if (index !== -1) {
        // item to remove is in array
        let newItems, totalQt, totalAmt;
        let countDiff = current.qt - selectedItem.qt;

        totalAmt = state.totalAmount - countDiff * current.currentPrice;

        if (current.qt === 1 || subtype === "rmv") {
          // remove item entirely from cart
          totalQt = 0;
          subtype === 'rmv' && (totalAmt = state.totalAmount - current.currentPrice * current.qt);
          newItems = state.items.filter((item) => item.id !== current.id);
        } else {
          // reduce item count
          let newItem = {
            ...current,
            qt: selectedItem.qt,
          };
          newItems = [...state.items];
          newItems[index] = newItem;

          totalQt = state.totalQuantity - countDiff;
        }
        return {
          ...state,
          items: newItems,
          totalAmount: totalAmt,
          totalQuantity: totalQt,
        };
      } else {
        return state;
      }
  }
  return defaultContext;
};

export default function CartProvider({ children }) {
  const [cartState, cartDispatcher] = useReducer(cartReducer, defaultContext);

  const addToCartHandler = (item) => {
    cartDispatcher({ type: "ADD", data: item });
  };
  const removeFromCartHandler = (item) => {
    cartDispatcher({ type: "REMOVE", data: item }); // item: { data, subType}
  };

  const cartContext = {
    items: cartState.items,
    isCartShowing: cartState.isCartShowing,
    totalQuantity: cartState.totalQuantity,
    totalAmount: cartState.totalAmount,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
