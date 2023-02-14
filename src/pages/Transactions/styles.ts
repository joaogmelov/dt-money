import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 70rem;
  padding: 4rem 1.5rem 0;
  margin: 0 auto;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  overflow-x: scroll;

  td {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 1.25rem 2rem;

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    button {
      line-height: 0;
      background: none;
      border: none;
      color: ${(props) => props.theme['red-300']};
      cursor: pointer;

      &:hover {
        transition: 0.2s;
        color: ${(props) => props.theme['red-500']};
      }
    }
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
