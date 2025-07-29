<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
// Components
// Update the path if AppHeader.vue is located elsewhere, for example:
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'
</script>

<template>
    <v-app>
        <AppHeader />
        <div class="w-full bg-gray-100 h-full">
            <RouterView />
        </div>
        <AppFooter />
    </v-app>
</template>

<style scoped></style>
