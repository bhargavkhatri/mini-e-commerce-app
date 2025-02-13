import styled from "styled-components";

export const CartContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  border-left: 2px solid #ddd;

  h2 {
    font-size: 1.8rem;
    font-weight: 400;
    color: #222;
    margin: 0!important
  }

  .cart-items {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    padding: 12px 0;
    gap: 12px;

    .item-details {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 5px;

      h3 {
        font-size: 1rem;
        font-weight: bold;
        color: #333;
        white-space: normal;
        max-width: 180px;
        word-wrap: break-word;
      }

      .price-container {
        font-size: 0.9rem;
        color: #666;
        display: flex;
        align-items: center;
        gap: 6px;
      }
    }

    input {
      width: 50px;
      padding: 6px;
      border: 1px solid #ccc;
      border-radius: 5px;
      text-align: center;
      font-size: 1rem;
      transition: 0.3s ease;

      &:focus {
        border-color: #007bff;
        box-shadow: 0px 0px 4px rgba(0, 123, 255, 0.4);
      }
    }

    .remove-btn {
      background: #ff4d4d;
      border: none;
      color: white;
      padding: 8px 12px;
      font-size: 0.9rem;
      border-radius: 6px;
      cursor: pointer;
      transition: 0.3s ease;

      &:hover {
        background: #e63946;
      }
    }
  }

  .total-container {
    text-align: right;
    margin-top: 15px;
    font-size: 1.3rem;
    font-weight: bold;
    color: #222;
  }

  .checkout-btn {
    width: 100%;
    padding: 12px;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background: #1f2937;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s ease;
    margin-top: 15px;
  }

   @media (max-width: 768px) {
    width: 95%;
    height: auto;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: auto;
    max-height: 14vh; 
    box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.15);
    border-top: 2px solid #ddd;
    padding: 15px;
    border-radius: 0;
    overflow-y: auto;
`;
