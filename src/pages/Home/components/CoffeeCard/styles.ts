import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;

  img {
    width: 7.5rem;
    height: 7.5rem;
    position: absolute;
    top: -1.25rem;
    object-fit: cover;
  }

  ul {
    margin-top: 7rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    list-style-type: none;

    li {
      padding: 0.25rem 0.5rem;
      background-color: ${(props) => props.theme["yellow-light"]};
      border-radius: 100px;
      color: ${(props) => props.theme["yellow-dark"]};
      font-size: 0.625rem;
      font-weight: 700;
      line-height: 1.3;
      text-transform: uppercase;
    }
  }

  h3 {
    margin-top: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
  }

  p {
    width: 13.5rem;
    margin-top: 0.5rem;
    text-align: center;
    color: ${(props) => props.theme["base-label"]};
    font-size: 0.875rem;
    line-height: 1.3;
  }

  & > div {
    margin-top: 2rem;
    width: 13rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: ${(props) => props.theme["base-text"]};
      font-size: 0.875rem;

      b {
        font-family: "Baloo 2", sans-serif;
        font-size: 1.5rem;
        font-weight: 800;
        /* line-height: 1.3; */
      }
    }
  }
`;
