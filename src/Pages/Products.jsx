import { useState, useEffect } from "react";
import fetchProducts from "../Services/getProducts";
import { ProductCard } from "../components";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const productsJSON = await fetchProducts();
      setProducts(JSON.parse(productsJSON));
    })();
  }, [setProducts]);

  return (
    <>
      <h1>Products (showing {products.length})</h1>
      <div className="grid grid-cols-5 gap-2 justify-start p-4 flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Products;
