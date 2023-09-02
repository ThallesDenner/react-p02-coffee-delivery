import styled from "styled-components";

export const OrderConfirmedContainer = styled.main`
  padding: 5rem 7rem;

  h1 {
    color: ${(props) => props.theme["yellow-dark"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
  }

  p {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.25rem;
    line-height: 1.3;
  }

  & > div {
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 7rem;

    img {
      max-width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;

    & > div {
      flex-direction: column;
    }
  }

  @media (min-width: 769px) and (max-width: 1280px) {
    padding: 2rem 4rem;

    & > div {
      flex-direction: column;
    }
  }
`;
