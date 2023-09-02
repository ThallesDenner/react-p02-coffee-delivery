import styled from "styled-components";

import bannerBackground from "../../../../assets/images/banner-background.svg";

export const BannerContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  padding: 5.75rem 7rem;
  background-image: url(${bannerBackground});
  background-size: cover;
  background-position: center center;

  div {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h1 {
        color: ${(props) => props.theme["base-title"]};
        font-family: "Baloo 2", sans-serif;
        font-size: 3rem;
        font-weight: 800;
        line-height: 1.3;
      }

      p {
        color: ${(props) => props.theme["base-subtitle"]};
        font-size: 1.25rem;
        line-height: 1.3;
      }
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 1.25rem;
      list-style-type: none;

      li {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        /* flex: 1 1 15rem; */
        gap: 0.75rem;

        span:first-child {
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
      }

      li:nth-child(odd) {
        width: 15rem;
      }

      li:nth-child(even) {
        width: 18.75rem;
      }

      li:nth-child(1) span:first-child {
        background-color: ${(props) => props.theme["yellow-dark"]};
      }

      li:nth-child(2) span:first-child {
        background-color: ${(props) => props.theme["base-text"]};
      }

      li:nth-child(3) span:first-child {
        background-color: ${(props) => props.theme["yellow"]};
      }

      li:nth-child(4) span:first-child {
        background-color: ${(props) => props.theme["purple"]};
      }
    }
  }

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;

    div > div > h1 {
      font-size: 2rem;
    }
  }

  @media (min-width: 769px) and (max-width: 1280px) {
    flex-direction: column;
    padding: 4rem;
  }
`;
