import { createContext, useState } from "react";

export const CartContext = createContext(null)
const CartProvider = ({ children }) => {
     const [cartItem, setCartItem] = useState(null)
     const [orderUser, setOrderUser] = useState(null)
     const [itemCount, setItemCount] = useState(0)

     const info = {
          cartItem,
          setCartItem,
          itemCount,
          setItemCount,
          orderUser,
          setOrderUser
     }
     return (
          <CartContext.Provider value={info} >
               {children}
          </CartContext.Provider>
     );
};

export default CartProvider;