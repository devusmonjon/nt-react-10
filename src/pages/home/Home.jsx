import Products from "@/components/products/Products";
import { useFetch } from "@/hooks/useFetch";
import React from "react";

const Home = () => {
  const { data, loading } = useFetch("/products", { limit: 8 });
  return (
    <div>
      <h2 className="text-center text-4xl">Home</h2>
      <Products
        title={"Latest Products"}
        data={data?.products}
        loading={loading}
      />
    </div>
  );
};

export default Home;
