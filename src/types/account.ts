export type Account = {
    id: string
    accountNumber: string
    userId: string
    balance: number
    accountType: string
    apy?: number
    transactions?: Transaction[]
    createdAt: Date
    updatedAt: Date
}

type TransactionType =
    | 'deposit'
    | 'withdrawal'
    | 'transfer'
    | 'payment'
    | 'credit'
    | 'debit'

export type Transaction = {
    id: string
    accountId: string
    amount: number // amount in cents
    type: TransactionType
    category?: string
    merchant?: string
    description?: string
    createdAt: Date
    updatedAt: Date
}
