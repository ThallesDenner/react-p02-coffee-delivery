import styled from "styled-components";

export const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px;

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    hr {
      border: 1px solid ${(props) => props.theme["base-button"]};
    }
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        font-size: 1rem;
        line-height: 1.3;
      }
      
      &:last-child span {
        color: ${(props) => props.theme["base-subtitle"]};
        font-size: 1.25rem;
        font-weight: 700;
      }
    }
  }

  a {
    width: 100%;
    display: inline-block;
    text-align: center;
    padding: 0.75rem 0.5rem;
    background-color: ${(props) => props.theme["yellow"]};
    border: 0;
    border-radius: 6px;
    color: ${(props) => props.theme["white"]};
    font-size: 0.875rem;
    font-weight: 700;
    /* line-height: 1.6; */
    text-decoration: none;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
