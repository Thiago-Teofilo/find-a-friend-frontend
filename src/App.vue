<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { IoIosMenu } from 'vue3-icons/io'

import SearchWrapper from './components/SearchWrapper.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
    <NavBar />

    <RouterView />
</template>
