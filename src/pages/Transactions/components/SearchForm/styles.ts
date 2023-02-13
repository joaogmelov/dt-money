import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    color: ${(props) => props.theme['green-300']};
    background-color: transparent;
    padding: 1rem;
    border: 1px solid ${(props) => props.theme['green-300']};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      color: ${(props) => props.theme.white};
      border: 1px solid ${(props) => props.theme['green-500']};
      background-color: ${(props) => props.theme['green-500']};
      transition: all 0.2s;
    }
  }
`
