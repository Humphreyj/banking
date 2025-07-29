<script setup lang="ts">
// Components
defineProps({
    text: {
        type: String,
        default: 'Action',
    },
    icon: {
        type: String,
        default: 'mdi-domain',
    },
})
// const emit = defineEmits()
</script>

<template>
    <button
        class="flex-ic-js gap-2 w-[11rem] bg-[#E7EBFF] border border-opacity-50 border-gray-300 px-3 py-3 rounded-3xl text-xl text-[#2836B0] cursor-pointer shadow-md hover:bg-[#D0D6FF] transition-colors duration-200"
    >
        <v-icon :icon="icon"></v-icon>
        <span class="text-xl">{{ text }}</span>
    </button>
</template>
