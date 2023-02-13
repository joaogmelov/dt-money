import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  background-color: ${(props) => props.theme['gray-800']};
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3.5rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      color: ${(props) => props.theme['gray-300']};
      padding: 1rem;
      background-color: ${(props) => props.theme['gray-900']};
      border: none;
      border-radius: 6px;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      color: ${(props) => props.theme.white};
      border: none;
      background-color: ${(props) => props.theme['green-500']};
      border-radius: 6px;
      font-weight: bold;
      height: 58px;

      margin-top: 1.5rem;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background-color: ${(props) => props.theme['green-700']};
        transition: background-color 0.2s;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  color: ${(props) => props.theme['gray-500']};
  position: absolute;
  background: transparent;
  line-height: 0;
  border: none;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  padding: 1rem;
  border-radius: 6px;
  cursor: pointer;

  background-color: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-300']};

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
    background-color: ${(props) => props.theme['gray-600']};
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background-color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`
