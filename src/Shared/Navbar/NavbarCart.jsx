import { FaShoppingCart } from "react-icons/fa"
import { CartContext } from "../../ContextAPIs/CartProvider"
import { useContext } from "react"
import { Link } from "react-router-dom"

const NavbarCart = () => {
     const { itemCount, cartItem } = useContext(CartContext)

     return (
          <div className="ml-auto group relative text-black">
               <Link to={'/cart'} className="relative">
                    <FaShoppingCart className="text-slate-500 text-lg" />
                    <span className="absolute bg-black top-[-8px] right-[-15px] rounded-full text-[10px] flex items-center justify-center h-[18px] w-[18px] text-white">{itemCount}</span>
               </Link>
               <div className="absolute top-10 right-3 bg-_white shadow-md rounded-sm overflow-hidden p-4 w-48 z-10 group-hover:scale-100 transition-transform duration-300 transform origin-top-right scale-0">
                    {cartItem ? (
                         <div className="flex gap-3">
                              <div>
                                   <div>{cartItem?.course_name}</div>
                                   <div className="text-sm text-green-600">Tk {cartItem?.discount_price}</div>
                              </div>
                              <div>x{itemCount}</div>
                         </div>
                    ) : (
                         <div>No cart item found</div>
                    )}
               </div>
          </div>
     )
}

export default NavbarCart