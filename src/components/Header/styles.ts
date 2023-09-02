import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 7rem;

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.75rem;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
      padding: 0.5rem;
      background-color: ${(props) => props.theme["purple-light"]};
      border-radius: 6px;

      svg {
        color: ${(props) => props.theme["purple"]};
      }

      span {
        color: ${(props) => props.theme["purple-dark"]};
        font-size: 0.875rem;
      }
    }

    nav {
      /* padding: 0.5rem; */
      position: relative;

      a {
        /* width: 2.375rem;
        height: 2.375rem; */
        padding: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${(props) => props.theme["yellow-light"]};
        border-radius: 6px;
        color: ${(props) => props.theme["yellow-dark"]};
      }

      span {
        width: 1.25rem;
        height: 1.25rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -0.625rem;
        right: -0.625rem;
        background-color: ${(props) => props.theme["yellow-dark"]};
        border-radius: 50%;
        color: ${(props) => props.theme["white"]};
        font-size: 0.75rem;
        font-weight: 700;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 769px) and (max-width: 1280px) {
    padding: 2rem 4rem;
  }
`;
