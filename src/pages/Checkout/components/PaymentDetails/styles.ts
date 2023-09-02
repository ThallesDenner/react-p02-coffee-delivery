import styled from "styled-components";

export const PaymentDetailsContainer = styled.div`
  margin-top: 0.75rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  header {
    display: flex;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme["purple"]};
    }

    div {
      line-height: 1.3;

      h3 {
        color: ${(props) => props.theme["base-subtitle"]};
        font-size: 1rem;
        font-weight: 400;
      }

      p {
        font-size: 0.875rem;
      }
    }
  }

  & > div {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    gap: 0.75rem;

    & > div > input[type="radio"] {
      position: absolute;
      clip: rect(1px 1px 1px 1px);
      border: 0;
      height: 1px;
      width: 1px;
      overflow: hidden;
    }

    & > div {
      max-width: 11.25rem;
      display: flex;
      align-items: center;
      /* gap: 0.75rem; */
      flex: 1 0 0;
      padding-left: 1rem;
      background-color: ${(props) => props.theme['base-button']};
      border: 1px solid transparent;
      border-radius: 6px;
      font-size: 0.75rem;
      text-transform: uppercase;
      /* line-height: 1.6; */

      svg {
        color: ${(props) => props.theme['purple']};
      }

      &:has(input[type="radio"]:checked) {
        background-color: ${(props) => props.theme['purple-light']};
        border: 1px solid ${(props) => props.theme['purple']};
      }

      label {
        width: 100%;
        white-space: nowrap;
        padding-top: 1rem;
        padding-left: 0.75rem;
        padding-bottom: 1rem;
        padding-right: 1rem;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
