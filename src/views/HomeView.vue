<script setup lang="ts">
import SearchWrapper from '../components/SearchWrapper.vue'
</script>

<template>
    <div id="home" class="content">
        <main>
            <div class="grid gap-9">
                <h1>Leve a felicidade para o seu lar</h1>
                <img class="px-24" src="../assets/images/objects.svg" alt="" />
                <p>Encontre o animal de estimação ideal para seu estilo de vida!</p>
                <SearchWrapper :with-label="true" first-select-variant="secondary" />
            </div>
        </main>
    </div>
</template>

<style lang="postcss"></style>
