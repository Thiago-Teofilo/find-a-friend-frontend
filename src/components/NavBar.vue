<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { IoIosMenu, IoMdClose } from 'vue3-icons/io'

import SearchWrapper from '../components/SearchWrapper.vue'
import SearchFiltersForm from '../components/SearchFiltersForm.vue'

const route = useRoute()
const router = useRouter()

const showMenu = ref(false)

function redirectToHome() {
    showMenu.value = false
    router.push('/')
}
</script>

<template>
    <div>
        <header>
            <img
                v-if="route.name === 'home'"
                @click="redirectToHome"
                class="h-[32.55px]"
                src="../assets/logo_variant_1.svg"
                alt="logo"
            />
            <div v-else class="flex w-full items-center gap-4">
                <img
                    @click="redirectToHome"
                    class="h-[32.55px]"
                    src="../assets/logo.svg"
                    alt="logo"
                />
                <IoIosMenu
                    v-if="!showMenu"
                    class="text-2xl cursor-pointer ml-auto"
                    @click="() => (showMenu = true)"
                />
                <IoMdClose
                    class="text-2xl cursor-pointer ml-auto"
                    @click="() => (showMenu = false)"
                    v-else
                />
            </div>

            <!-- <nav>
                <RouterLink to="/">Home</RouterLink>
            </nav> -->
        </header>
        <transition name="fade">
            <div
                v-if="showMenu"
                class="absolute grid items-center top-0 left-0 h-full w-full bg-primary"
            >
                <SearchWrapper
                    second-select-variant="secondary-outlined"
                    first-select-variant="secondary-outlined"
                />
                <SearchFiltersForm />
            </div>
        </transition>
    </div>
</template>

<style lang="postcss" scoped>
img {
    @apply cursor-pointer;
}

.fade-enter-active,
.fade-leave-active {
    transition:
        opacity 0.5s ease,
        max-height 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    max-height: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
    max-height: 100%;
}
</style>
