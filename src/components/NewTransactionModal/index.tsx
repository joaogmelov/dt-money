import * as Dialog from '@radix-ui/react-dialog'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'

import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../contexts/TransactionsContext'

const TypeEnum = z.enum(['income', 'outcome'])

const TransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: TypeEnum,
})

type NewTransactionType = z.infer<typeof TransactionFormSchema>

export function NewTransactionModal() {
  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.createTransaction
    },
  )

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionType>({
    resolver: zodResolver(TransactionFormSchema),
  })

  async function handleCreateNewTransaction(data: NewTransactionType) {
    const { description, price, category, type } = data

    await createTransaction({
      description,
      price,
      category,
      type,
    })

    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
