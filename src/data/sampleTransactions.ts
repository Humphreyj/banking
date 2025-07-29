import type { Account, Transaction } from '@/types/account'

export const sampleTransactions: Transaction[] = [
    {
        id: '1',
        accountId: 'c847868d-dffb-4d1e-a385-74dd578c46a7',
        amount: 150000,
        type: 'credit',
        category: 'Income',
        merchant: 'Company XYZ',
        description: 'Salary Payment',
        createdAt: new Date('2023-10-01T00:00:00Z'),
        updatedAt: new Date('2023-10-01T00:00:00Z'),
    },
    {
        id: '2',
        accountId: 'c847868d-dffb-4d1e-a385-74dd578c46a7',
        amount: 22000,
        type: 'debit',
        category: 'Electronics',
        merchant: 'Nerd Inc',
        description: '',
        createdAt: new Date('2023-10-01T00:00:00Z'),
        updatedAt: new Date('2023-10-01T00:00:00Z'),
    },
    {
        id: '3',
        accountId: 'c847868d-dffb-4d1e-a385-74dd578c46a7',
        amount: 5950,
        type: 'debit',
        category: 'Groceries',
        merchant: 'Food Inc',
        description: '',
        createdAt: new Date('2023-10-01T00:00:00Z'),
        updatedAt: new Date('2023-10-01T00:00:00Z'),
    },
]

export const sampleAccount: Account = {
    id: 'c847868d-dffb-4d1e-a385-74dd578c46a7',
    accountNumber: '0000-0000-0000-0001',
    userId: '1',
    balance: 100000,
    accountType: 'checking',
    transactions: sampleTransactions,
    createdAt: new Date('2023-10-01T00:00:00Z'),
    updatedAt: new Date('2023-10-01T00:00:00Z'),
}
