import { Route, Routes } from "react-router-dom";
import { Cart, Products } from "./Pages";

export default function Router() {
  return (
    <Routes>
      <Route path="/cart" element={<Cart />} />
      <Route path="/" element={<Products />} />
    </Routes>
  );
}
