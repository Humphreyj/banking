<script setup>
// Components
// const props = defineProps({})
// const emit = defineEmits()
</script>

<template>
    <v-bottom-navigation grow>
        <v-btn value="home">
            <v-icon>mdi-home</v-icon>

            <span>Home</span>
        </v-btn>

        <v-btn value="wallet">
            <v-icon>mdi-wallet</v-icon>

            <span>Wallet</span>
        </v-btn>

        <v-btn value="report">
            <v-icon>mdi-chart-timeline</v-icon>

            <span>Report</span>
        </v-btn>
        <v-btn value="account">
            <v-icon>mdi-account</v-icon>

            <span>Account</span>
        </v-btn>
    </v-bottom-navigation>
</template>
