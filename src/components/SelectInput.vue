<script setup lang="ts">
import { ref, defineProps, withDefaults, onMounted, onBeforeUnmount } from 'vue'
import { type VariantEnum, variantClasses } from '../utils/variants'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'vue3-icons/ri'

// Definindo as props
const props = withDefaults(
    defineProps<{
        variant?: VariantEnum
        options: Record<string, any>
        placeholder?: string
    }>(),
    {
        variant: 'primary',
        placeholder: undefined
    }
)

const selectedKey = ref<string | null>(null)
const showDropdown = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

// Aplica a classe variante ao botão do dropdown
const variantClass = ref<string[]>([variantClasses[props.variant]])

// Funções para controlar a exibição do dropdown
function toggleDropdown() {
    showDropdown.value = !showDropdown.value
}

function selectOption(key: string) {
    selectedKey.value = key
    showDropdown.value = false
}

function handleClickOutside(event: MouseEvent) {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        showDropdown.value = false
    }
}

// Adicionar e remover o evento de clique ao montar e desmontar o componente
onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
    <div ref="dropdownRef" class="relative">
        <!-- Botão do dropdown -->
        <div
            :class="[
                'custom-select h-16 flex items-center text-center cursor-pointer',
                ...variantClass,
                {
                    opened: showDropdown
                }
            ]"
            @click="toggleDropdown"
        >
            <div class="m-auto flex items-center">
                <span class="relative pr-5"
                    >{{ selectedKey || props.placeholder || '' }}

                    <div>
                        <transition name="slide-up">
                            <RiArrowDropDownLine class="icon" v-if="!showDropdown" />
                            <RiArrowDropUpLine class="icon" v-else />
                        </transition>
                    </div>
                </span>
            </div>
        </div>

        <!-- Dropdown -->
        <transition name="slide-down">
            <div v-if="showDropdown" class="custom-select-dropdown">
                <div
                    v-for="(value, key, i) in props.options"
                    :key="i"
                    @click="selectOption(key)"
                    class="cursor-pointer justify-center text-xl !font-extrabold hover:bg-primary transition h-10 flex items-center"
                >
                    {{ key }}
                </div>
            </div>
        </transition>
    </div>
</template>

<style lang="postcss" scoped>
/* .custom-select.opened {
} */

.custom-select-dropdown {
    @apply absolute z-10 w-full bg-primary-alt;
}

.custom-select.opened,
.custom-select-dropdown {
    @apply shadow-lg;
}

.icon {
    @apply absolute top-1 right-0;
}

/* Animations */

.slide-down-enter-active {
    transition: all 0.3s ease-out;
}

.slide-down-leave-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-down-enter-from,
.slide-down-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.25s ease-out;
}

.slide-up-enter-from {
    opacity: 0;
    transform: translateY(10px);
}

.slide-up-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
