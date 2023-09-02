import styled from "styled-components";

export const DeliveryInformationContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  flex: 1 1 0;
  background:
    linear-gradient(
        ${(porps) => porps.theme["base-background"]},
        ${(porps) => porps.theme["base-background"]}
      )
      padding-box,
    linear-gradient(45deg, #dbac2c, #8047f8) border-box;
  border: 1px solid transparent;
  border-radius: 6px 36px;
  list-style-type: none;

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    & > div:first-child {
      width: 2rem;
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      border-radius: 50%;
    }

    svg {
      color: ${(props) => props.theme["white"]};
    }

    div {
      line-height: 1.3;
    }

    b {
      font-weight: 700;
    }
  }

  li:nth-child(1) > div:first-child {
    background-color: ${(props) => props.theme["purple"]};
  }

  li:nth-child(2) > div:first-child {
    background-color: ${(props) => props.theme["yellow"]};
  }

  li:nth-child(3) > div:first-child {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;
