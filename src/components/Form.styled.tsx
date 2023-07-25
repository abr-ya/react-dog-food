import styled, { css } from 'styled-components/macro';

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  max-width: 420px;
`;

export const StyledInput = styled.input<{ $icon?: string }>`
  box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  outline: none;
  font-family: inherit;
  font-size: 1rem;

  ${({ $icon }) =>
    $icon &&
    css`
      background: url('./icons/${$icon}.svg') #ffffff 2.5% center no-repeat;
    `}
`;

export const StyledLabel = styled.label`
  padding: 4px 0;
`;

export const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  margin-top: 10px;
  max-width: 420px;

  @media (min-width: 1024px) {
    justify-content: start;
  }
`;
