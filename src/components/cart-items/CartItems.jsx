import { useStateValue } from "@/context";
import { IoIosHeartDislike, IoIosHeart } from "react-icons/io";
import { MdShoppingCart, MdRemoveShoppingCart } from "react-icons/md";

const CartItems = ({ data, title, loading = true }) => {
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
    <div className="border p-3 flex justify-between gap-5" key={inx}>
      <div className="min-w-60 max-w-60 overflow-hidden h-60 bg-gray-200">
        <img
          className="w-full h-full object-contain"
          src={product.images[0]}
          alt="Photo"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold">{product.title}</h3>
        <p>{product.description}</p>
        <strong>{product.price} USD</strong>
      </div>
      <div className="flex gap-3 flex-col items-center justify-start">
        {!isProductInCart(product) ? (
          <button onClick={() => addToCart(product)}>
            <MdShoppingCart size={30} />
          </button>
        ) : (
          <button onClick={() => removeFromCart(product)}>
            <MdRemoveShoppingCart size={30} />
          </button>
        )}

        {!isProductInWishlist(product) ? (
          <button onClick={() => addToWishlist(product)}>
            <IoIosHeart size={30} />
          </button>
        ) : (
          <button onClick={() => removeFromWishlist(product)}>
            <IoIosHeartDislike size={30} />
          </button>
        )}
      </div>
    </div>
  ));
  return (
    <div className="container mx-auto py-10">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <div className="flex flex-col gap-2">
        {loading
          ? "Loading..."
          : items?.length > 0
          ? items
          : `${title} is empty`}
      </div>
    </div>
  );
};

export default CartItems;
