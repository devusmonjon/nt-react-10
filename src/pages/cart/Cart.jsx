import CartItems from "@/components/cart-items/CartItems";
import { useStateValue } from "@/context";

const Cart = () => {
  const [data, dispatch] = useStateValue();
  return (
    <div>
      <h2 className="text-center text-4xl">wishlist</h2>
      <CartItems title={"Cart"} data={data?.cart} loading={false} />
    </div>
  );
};

export default Cart;
