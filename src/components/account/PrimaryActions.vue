<script setup lang="ts">
import ActionButton from '../common/buttons/ActionButton.vue'

// Components
// const props = defineProps({})
// const emit = defineEmits()
</script>

<template>
    <div class="flex-ic-jb w-full mx-auto flex-wrap gap-4">
        <ActionButton text="Add Money" icon="mdi-plus-circle-outline" />
        <ActionButton text="Send Money" icon="mdi-bank-transfer-out" />
        <ActionButton text="Deposit" icon="mdi-bank-transfer-in" />
        <ActionButton text="Withdraw" icon="mdi-cash-multiple" />
    </div>
</template>
