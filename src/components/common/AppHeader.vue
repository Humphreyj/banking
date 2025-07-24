<script setup>
import { useRoute } from 'vue-router'
// Components

const route = useRoute()
console.log('Route:', route)
// const emit = defineEmits()
</script>

<template>
    <header class="w-full flex-ic-jb p-4">
        <div class="w-full flex-ic-jb gap-3">
            <section class="flex-ic-js gap-2">
                <v-avatar class="" size="48">
                    <v-img
                        src="https://thispersondoesnotexist.com/"
                        alt="Logo"
                    ></v-img>
                </v-avatar>
                <div class="flex-col-is-js">
                    <div class="text-gray-500 text-sm">Welcome back,</div>
                    <div class="text-gray-800 font-bold">User Name</div>
                </div>
            </section>
            <v-icon
                icon="mdi-bell-outline"
                class="text-gray-600"
                size="large"
            ></v-icon>
        </div>
    </header>
</template>
