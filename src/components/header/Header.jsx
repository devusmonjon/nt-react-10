import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-slate-100 h-20">
      <div className="h-full flex gap-8 items-center container mx-auto">
        <NavLink className="text-2xl flex-1" to={"/"}>
          Logoo
        </NavLink>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/wishlist"}>Wishlist</NavLink>
        <NavLink to={"/cart"}>Cart</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
      </div>
    </header>
  );
};

export default Header;
