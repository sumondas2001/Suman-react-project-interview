import { useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { OrderContext } from "../../ContextAPIs/OrderProvider";
import { Link } from "react-router-dom";

const Cart = () => {
  const [product, setProduct] = useState([]);
  const { cartCall } = useContext(OrderContext);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("productDraft")) || [];
    setProduct(items);
  }, [cartCall]);

  return (
    <>
      <Link
        to="/orderPage"
        className="hover:text-white w-12 flex relative justify-center bg-text_secondary text-white px-pl_primary py-pl_primary"
      >
        <FaShoppingCart className="text-text_xl z-10" />
        <div className="absolute -top-4 -left-4 bg-text_secondary flex items-center justify-center h-8 w-8 rounded-full">
          {product.length}
        </div>
      </Link>
    </>
  );
};

export default Cart;
