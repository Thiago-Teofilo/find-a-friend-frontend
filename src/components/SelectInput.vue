<script setup lang="ts">
import { FaSearch } from 'vue3-icons/fa'
import { ref, defineProps, withDefaults } from 'vue'
import { useRouter } from 'vue-router'

type VariantEnum = 'primary' | 'secondary' | 'secondary-outlined'
const variantClasses: Record<variantEnum, string> = {
    primary: 'bg-primary-alt',
    secondary: 'bg-primary border border-solid border-white',
    'secondary-outlined': 'bg-primary-alt border border-solid border-border'
}

interface IOption {
    value: any
    content: string
}

const props = withDefaults(
    defineProps<{
        variant?: VariantEnum
        options: IOption[]
    }>(),
    {
        withLabel: false,
        variant: 'primary'
    }
)

const variantClass = ref<string[]>([variantClasses[props.variant]])
</script>

<template>
    <select :class="[...variantClass]">
        <option v-for="(option, i) in props.options" :key="i" :value="option.value">
            {{ option.content }}
        </option>
    </select>
</template>
