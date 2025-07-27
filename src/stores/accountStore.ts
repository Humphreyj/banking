import { ref } from 'vue'
import { defineStore } from 'pinia'
// Types
import { Account } from '@/types/account'

export const useAccountStore = defineStore('account', () => {
    const selectedAccount = ref<Account | null>(null)
    const actions = {}
    const values = {
        selectedAccount,
    }
    return {
        actions,
        values,
    }
})
