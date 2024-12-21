import React from "react";

const CartContext = React.createContext({
  items: Array,
  totalQuantity: Number,
  totalAmount: Number,
  addItem: Function,
  removeItem: Function, 
});

export default CartContext;