import styled from "styled-components";

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  flex: 1;
  max-width: calc(100% - 400px);

  .product-card {
    background: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    transition: 0.3s ease;
    max-width: 250px;
    height: 350px;

    &:hover {
      transform: scale(1.05);
    }

    img {
      width: 100%;
      height: 180px;
      object-fit: contain;
      margin-bottom: 10px;
    }

    h3 {
      font-size: 1rem;
      color: #333;
      margin-bottom: 5px;
    }

    p {
      font-size: 0.9rem;
      color: #666;
      margin-bottom: 10px;
    }

    button {
      border: none;
      color: white;
      padding: 10px 15px;
      font-size: 0.9rem;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.3s ease;
      background: #28a745;
    }

    button:hover {
      background: #218838;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-bottom: 50px;
    max-width: 100%;
  }
`;

export const LoadingMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #555;
  padding: 20px;
`;
