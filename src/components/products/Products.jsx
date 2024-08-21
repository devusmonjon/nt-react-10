import { useStateValue } from "@/context";
import { IoIosHeartDislike, IoIosHeart } from "react-icons/io";
import { MdShoppingCart, MdRemoveShoppingCart } from "react-icons/md";

const Products = ({ data, title, loading = true }) => {
  const [datas, dispatch] = useStateValue();

  const isProductInWishlist = (product) => {
    return datas.wishlist.some((item) => item.id === product.id);
  };

  const addToWishlist = (product) => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: product,
    });
  };

  const removeFromWishlist = (product) => {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: product.id,
    });
  };

  const isProductInCart = (product) => {
    return datas.cart.some((item) => item.id === product.id);
  };

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const removeFromCart = (product) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product.id,
    });
  };

  let items = data?.map((product, inx) => (
    <div className="border p-3" key={inx}>
      <div className="w-full h-60 bg-gray-200">
        <img
          className="w-full h-full object-contain"
          src={product.images[0]}
          alt="Photo"
        />
      </div>
      <p>Lorem, ipsum dolor.</p>
      <strong>500 USD</strong>
      <div className="flex justify-end gap-3">
        {!isProductInCart(product) ? (
          <button onClick={() => addToCart(product)}>
            <MdShoppingCart size={20} />
          </button>
        ) : (
          <button onClick={() => removeFromCart(product)}>
            <MdRemoveShoppingCart size={20} />
          </button>
        )}

        {!isProductInWishlist(product) ? (
          <button onClick={() => addToWishlist(product)}>
            <IoIosHeart size={20} />
          </button>
        ) : (
          <button onClick={() => removeFromWishlist(product)}>
            <IoIosHeartDislike size={20} />
          </button>
        )}
      </div>
    </div>
  ));
  return (
    <div className="container mx-auto py-10">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {loading
          ? "Loading..."
          : items?.length > 0
          ? items
          : `${title} is empty`}
      </div>
    </div>
  );
};

export default Products;
