import styled from "styled-components";

export const CartInputOutputContainer = styled.form`
  display: flex;
  gap: 0.5rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem;
    background-color: ${(props) => props.theme["base-button"]};
    border-radius: 6px;

    button {
      width: 0.875rem;
      line-height: 0;
      border: 0;
      border-radius: 2px;
      background-color: ${(props) => props.theme["base-button"]};
      cursor: pointer;

      svg {
        color: ${(props) => props.theme["purple"]};
      }

      & svg:hover {
        color: ${(props) => props.theme["purple-dark"]};
      }
    }

    input {
      width: 1.25rem;
      text-align: center;
      background-color: ${(props) => props.theme["base-button"]};
      border: 0;
      border-radius: 2px;
      color: ${(props) => props.theme["base-title"]};
    }
  }
`;

export const AddButton = styled.button`
  padding: 0.5rem;
  line-height: 0;
  border: 0;
  border-radius: 6px;
  background-color: ${(props) => props.theme["purple-dark"]};
  cursor: pointer;

  svg {
    color: ${(props) => props.theme["white"]};
  }

  &:hover {
    background-color: ${(props) => props.theme["purple"]};
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme["base-button"]};
  border: 0;
  border-radius: 6px;
  color: ${(props) => props.theme["base-text"]};
  cursor: pointer;
  font-size: 0.75rem;
  /* line-height: 0; */
  text-transform: uppercase;

  svg {
    color: ${(props) => props.theme["purple"]};
  }

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
    color: ${(props) => props.theme["base-subtitle"]};

    svg {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
`;

// export const DecreaseButton = styled.button``;

// export const IncreaseButton = styled.button``;
