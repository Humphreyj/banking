import { ref } from 'vue'
import { defineStore } from 'pinia'
// Types
import { Account } from '@/types/account'
// Sample Data
import { sampleAccount } from '@/data/sampleTransactions'

export const useAccountStore = defineStore('account', () => {
    const selectedAccount = ref<Account>(sampleAccount)
    const actions = {}
    const values = {
        selectedAccount,
    }
    return {
        ...actions,
        ...values,
    }
})
