import React, { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import { useCart } from "../../context/CartContext.tsx";
import { LoadingMessage, ProductContainer } from "./ProductList.styles.ts";

// Debounce function to delay search filtering
const debounce = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const ProductList = ({ searchQuery }: { searchQuery: string }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Show all products initially
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    // Debounced search filtering
    const debouncedFilter = debounce(() => {
      if (!searchQuery) {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(
          products.filter((product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
      }
    }, 500);

    debouncedFilter();
  }, [searchQuery, products]);

  return (
    <ProductContainer>
      {loading ? (
        <LoadingMessage>Loading products...</LoadingMessage>
      ) : filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart({ ...product, quantity: 1 })}>
              Add to Cart
            </button>
          </div>
        ))
      ) : (
        <LoadingMessage>No products found.</LoadingMessage>
      )}
    </ProductContainer>
  );
};

export default ProductList;
