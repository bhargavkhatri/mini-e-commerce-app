import React, { useState } from "react";
import ProductList from "./components/ProductList/ProductList.tsx";
import Cart from "./components/Cart/Cart.tsx";
import { CartProvider } from "./context/CartContext.tsx";
import { GlobalStyles } from "./App. styles.ts";
import { AppContainer, ContentWrapper, SearchInput } from "./App. styles.ts";

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search with debounce
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    debounce(() => setSearchQuery(value), 500)();
  };

  // Debounce function to delay search
  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };
  return (
    <>
      <GlobalStyles />
      <CartProvider>
        <AppContainer>
          <h2>Mini E-Commerce App</h2>
          {/* Search Input */}
          <SearchInput
            type="text"
            placeholder="Search products..."
            onChange={handleSearchChange}
          />
          <ContentWrapper>
            <ProductList searchQuery={searchQuery} />
            <Cart />
          </ContentWrapper>
        </AppContainer>
      </CartProvider>
    </>
  );
};

export default App;
