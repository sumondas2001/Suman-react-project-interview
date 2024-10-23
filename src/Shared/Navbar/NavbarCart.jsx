import { FaShoppingCart } from "react-icons/fa"
import { CartContext } from "../../ContextAPIs/CartProvider"
import { useContext } from "react"

const NavbarCart = () => {
     const { itemCount } = useContext(CartContext)

     return (
          <div className="ml-auto relative">
               <FaShoppingCart className="text-slate-500 text-lg" />
               <span className="absolute bg-black top-[-8px] right-[-15px] rounded-full text-[10px] flex items-center justify-center h-[18px] w-[18px]">{itemCount}</span>
          </div>
     )
}

export default NavbarCart