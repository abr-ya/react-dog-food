import styled from "styled-components/macro";

export const StyledNumberInput = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  /* width: 100px;
  border: 1px solid gainsboro;
  border-radius: 4px; */

  & input[type="number"]::-webkit-outer-spin-button,
  & input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  & input[type="number"] {
    -moz-appearance: textfield;
  }
  & input[type="number"]:hover,
  & input[type="number"]:focus {
    -moz-appearance: number-input;
  }

  & .button {
    height: 36px;
    min-width: 30px;
    padding: 6px 0;
    margin-right: 0;
    color: #262626;
    border: 1px solid gainsboro;
    background-color: white;
    cursor: pointer;

    &.minus {
      border-right: none;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      padding-right: 0;
    }

    &.plus {
      border-left: none;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }

  & .edit {
    padding: 3px 0;
    height: 36px;
    width: 30px;
    border-radius: 0;
    border: 1px solid gainsboro;
    border-right: none;
    border-left: none;

    & > p {
      text-align: center;
    }
  }

  & .edit:hover {
    cursor: text;
  }

  & .svg {
    color: #777;
    fill: currentColor;
    height: 20px;
    width: 20px;
  }

  & .input {
    width: 30px;
    height: 36px;
    text-align: center;
    border: 1px solid gainsboro;
  }

  & .inputError {
    outline: 2px solid red;
  }
`;
