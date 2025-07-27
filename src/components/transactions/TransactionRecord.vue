<script setup lang="ts">
import { computed } from 'vue'
// Components
interface TransactionRecordProps {
    // Define any props if needed
    id: string
    amount: number
    date: string
    merchant?: string
    category: string
    description?: string
    type: string
}
const props = withDefaults(defineProps<TransactionRecordProps>(), {
    id: crypto.randomUUID(),
    amount: 0,
    date: new Date().toISOString(),
    merchant: 'Unknown Merchant',
    category: 'Food',
})
// const emit = defineEmits()
const categoryIcon = computed(() => {
    switch (props.category) {
        case 'Food':
            return 'mdi-food'
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
        case 'Food':
            return 'bg-yellow-500'
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
    <v-card class="w-full">
        <div class="grid grid-cols-5 w-full items-center p-2">
            <div
                class="p-1 rounded-full text-2xl w-max"
                :class="iconBackground"
            >
                <v-icon
                    :icon="categoryIcon"
                    class="text-black rounded-full"
                ></v-icon>
            </div>
            <div class="flex-col-is-js col-span-3">
                <h2 class="text-lg font-semibold">{{ props.merchant }}</h2>
                <p class="text-sm text-gray-600">{{ props.category }}</p>
            </div>
            <div class="text-right">{{ props.amount }}</div>
        </div>
    </v-card>
</template>
