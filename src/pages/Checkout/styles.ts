import styled from "styled-components";

export const CheckoutContainer = styled.main`
  display: flex;
  gap: 2rem;
  padding: 2.5rem 7rem;

  & > div:first-child {
    max-width: 40rem;
    /* flex: 1 1 auto; */
  }

  & > div:nth-child(2) {
    max-width: 28rem;
    flex: 1;
  }

  & > div > h2 {
    margin-bottom: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.3;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }

  @media (min-width: 769px) and (max-width: 1280px) {
    flex-direction: column;
    padding: 2rem 4rem;
  }
`;
