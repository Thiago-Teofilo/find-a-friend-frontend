<script setup lang="ts">
import { ref, defineProps, withDefaults, onMounted, onBeforeUnmount } from 'vue'
import { VariantEnum, variantClasses } from '../utils/variants'
import { RiArrowDropDownLine } from 'vue3-icons/ri'

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
                <span>{{ selectedKey || props.placeholder || '' }} </span>
                <RiArrowDropDownLine />
            </div>
        </div>

        <!-- Dropdown -->
        <div v-if="showDropdown" class="absolute z-10 w-full bg-primary shadow-lg">
            <div
                v-for="(value, key, i) in props.options"
                :key="i"
                @click="selectOption(key)"
                class="cursor-pointer justify-center text-xl !font-extrabold hover:bg-primary-alt transition h-10 flex items-center"
            >
                {{ key }}
            </div>
        </div>
    </div>
</template>
