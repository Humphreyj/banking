<script setup lang="ts">
// Pinia
import { storeToRefs } from 'pinia'
import { useAccountStore } from '@/stores/accountStore'

import TransactionRecord from '../transactions/TransactionRecord.vue'

// Components
// const props = defineProps({})
// const emit = defineEmits()
const { selectedAccount } = storeToRefs(useAccountStore())
</script>

<template>
    <main class="w-full flex-col-is-js gap-4">
        <header class="flex-ic-jb w-full py-4 px-3">
            <h1 class="text-xl font-semibold">Transaction History</h1>
            <p class="text-gray-500 font-semibold underline">View all</p>
        </header>
        <div class="flex-ic-js gap-3 px-3 text-lg">
            <p>All</p>
            <p>Income</p>
            <p>Expenses</p>
        </div>
        <section class="flex-col-is-js gap-1 w-[96%] mx-auto">
            <TransactionRecord
                v-for="transaction in selectedAccount.transactions"
                :key="transaction.id"
                :id="transaction.id"
                :amount="transaction.amount"
                :date="transaction.createdAt"
                :merchant="transaction.merchant"
                :category="transaction.category"
                :description="transaction.description"
                :type="transaction.type"
            />
        </section>
    </main>
</template>
