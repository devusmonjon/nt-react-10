import Products from "@/components/products/Products";
import { useStateValue } from "@/context";

const Wishlist = () => {
  const [data, dispatch] = useStateValue();
  return (
    <div>
      <h2 className="text-center text-4xl">wishlist</h2>
      <Products title={"Wishlist"} data={data?.wishlist} loading={false} />
    </div>
  );
};

export default Wishlist;
