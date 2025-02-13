import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
      font-family: 'Inter', sans-serif;
  }
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-bottom: 120px;

  h2 {
    font-size: 2rem;
    color: #222;
    margin: 20px 0;
  }

  @media (max-width: 768px) {
    padding-bottom: 80px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 90%;
  max-width: 1200px;
  gap: 20px;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;
