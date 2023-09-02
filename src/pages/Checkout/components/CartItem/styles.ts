import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
      object-fit: cover;
    }

    div {
      h3 {
        margin-bottom: 0.5rem;
        color: ${(props) => props.theme["base-subtitle"]};
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.3;
      }

      div {
        height: 2rem;
      }
    }
  }

  & span {
    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;
    font-weight: 700;
    /* line-height: 1.3; */
  }
`;
