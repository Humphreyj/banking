<script setup lang="ts">
import TransactionRecord from '../transactions/TransactionRecord.vue'

// Components
// const props = defineProps({})
// const emit = defineEmits()
</script>

<template>
    <main class="w-full flex-col-is-js gap-4 px-1">
        <header class="flex-ic-jb w-full py-4">
            <h1 class="text-xl font-semibold">Transaction History</h1>
            <p>View all</p>
        </header>
        <div class="flex-ic-js gap-3">
            <p>All</p>
            <p>Income</p>
            <p>Expenses</p>
        </div>
        <section class="flex-col-is-js w-full">
            <TransactionRecord
                id="txn_001"
                :amount="100"
                date="2024-06-01"
                merchant="Sample Merchant"
                category="Food"
            />
        </section>
    </main>
</template>
