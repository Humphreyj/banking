<script setup lang="ts">
import BalanceCard from '@/components/account/BalanceCard.vue'
import PrimaryActions from '@/components/account/PrimaryActions.vue'
import TransactionHistory from '@/components/account/TransactionHistory.vue'

// Components
// const props = defineProps({})
// const emit = defineEmits()
</script>

<template>
    <div class="flex-col-is-js w-full gap-4 px-2">
        <BalanceCard />
        <PrimaryActions />
        <TransactionHistory />
    </div>
</template>
