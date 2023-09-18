import styled, { css } from "styled-components";

export const DeliveryAddressContainer = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  header {
    display: flex;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme["yellow-dark"]};
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
    flex-direction: column;
    gap: 1rem;

    label {
      position: absolute;
      clip: rect(1px 1px 1px 1px);
      border: 0;
      height: 1px;
      width: 1px;
      overflow: hidden;
    }

    & > div:nth-child(3),
    & > div:nth-child(4) {
      display: flex;
      gap: 0.75rem;
    }

    & > div:nth-child(3) > div:last-child {
      flex: 1;
      position: relative;

      span {
        position: absolute;
        top: 0.84rem;
        right: 0.75rem;
        color: ${(props) => props.theme["base-label"]};
        font-size: 0.75rem;
        font-style: italic;
        /* line-height: 1.3; */
      }
    }

    small {
      margin-top: 0.25rem;
      display: block;
      color: ${(props) => props.theme["form-error"]};
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    & > div {
      & > div:nth-child(3),
      & > div:nth-child(4) {
        flex-direction: column;
      }
    }
  }
`;

interface InputProps {
  className?: "w-25" | "w-50" | "w-75" | "w-100";
  width?: string;
}

const className = {
  "w-25": "25%",
  "w-50": "50%",
  "w-75": "75%",
  "w-100": "100%",
};

const widthRegex = new RegExp("^[0-9]+(?:px|em|rem|%)$");

export const Input = styled.input<InputProps>`
  ${(props) => {
    if (props.className) {
      return css`
        width: ${className[props.className]};
      `;
    }

    if (props.width && widthRegex.test(props.width)) {
      return css`
        width: ${props.width};
      `;
    }
  }}

  padding: 0.75rem;
  background-color: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;
  color: ${(props) => props.theme["base-text"]};
  font-size: 0.875rem;
  /* line-height: 1.3; */

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;
