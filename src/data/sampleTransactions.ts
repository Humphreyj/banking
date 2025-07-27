import type { Transaction } from '@/types/account'

export const sampleTransactions: Transaction[] = [
    {
        id: '1',
        accountId: '1',
        amount: 15000,
        type: 'credit',
        category: 'Income',
        merchant: 'Company XYZ',
        description: 'Salary Payment',
        createdAt: new Date('2023-10-01T00:00:00Z'),
        updatedAt: new Date('2023-10-01T00:00:00Z'),
    },
]
