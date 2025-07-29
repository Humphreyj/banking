<script setup lang="ts">
import { computed } from 'vue'
// Utils

interface TransactionRecordProps {
    // Define any props if needed
    id: string
    amount: number
    date: Date | string
    merchant?: string
    category?: string
    description?: string
    type: string
}
const props = withDefaults(defineProps<TransactionRecordProps>(), {
    id: crypto.randomUUID(),
    amount: 0,
    date: '',
    merchant: 'Unknown Merchant',
    category: 'Food',
})
// const emit = defineEmits()
const categoryIcon = computed(() => {
    switch (props.category) {
        case 'Income':
            return 'mdi-cash'
        case 'Food':
            return 'mdi-food'
        case 'Groceries':
            return 'mdi-store'
        case 'Electronics':
            return 'mdi-laptop'
        case 'Transport':
            return 'mdi-car'
        case 'Shopping':
            return 'mdi-cart'
        default:
            return 'mdi-help-circle'
    }
})
const iconBackground = computed(() => {
    switch (props.category) {
        case 'Income':
            return 'bg-green-200'
        case 'Food':
            return 'bg-yellow-500'
        case 'Groceries':
            return 'bg-pink-200'
        case 'Electronics':
            return 'bg-blue-200'
        case 'Transport':
            return 'bg-blue-500'
        case 'Shopping':
            return 'bg-green-500'
        default:
            return 'bg-gray-500'
    }
})
</script>

<template>
    <div
        class="grid grid-cols-5 border border-gray-200 bg-white w-full items-center p-2 rounded-md drop-shadow-sm shadow-sm"
    >
        <div class="p-1 rounded-full text-2xl w-max" :class="iconBackground">
            <v-icon
                :icon="categoryIcon"
                class="text-black rounded-full"
            ></v-icon>
        </div>
        <div class="flex-col-is-js col-span-2">
            <h2 class="text-lg font-semibold">{{ props.merchant }}</h2>
            <p class="text-sm text-gray-600">{{ props.category }}</p>
        </div>
        <div class="text-right col-span-2">
            {{
                Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                }).format(props.amount / 100)
            }}
        </div>
    </div>
</template>
