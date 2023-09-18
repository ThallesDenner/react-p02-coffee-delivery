import styled from "styled-components";

export const CoffeeMenuContainer = styled.section`
  /* display: flex;
  flex-direction: column;
  gap: 3.375rem; */
  padding: 2rem 7rem;

  h2 {
    margin-bottom: 3.375rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(auto-fill, 16rem);
    justify-content: center;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;

    & > h2 {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 769px) and (max-width: 1280px) {
    padding: 2rem 4rem;
  }
`;
