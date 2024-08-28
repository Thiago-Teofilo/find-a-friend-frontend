<script setup lang="ts">
import { FaSearch } from 'vue3-icons/fa'
import { ref, defineProps, withDefaults } from 'vue'
import { useRouter } from 'vue-router'

import { VariantEnum, variantClasses } from '../utils/variants'

const props = withDefaults(
    defineProps<{
        variant?: VariantEnum
    }>(),
    {
        variant: 'primary'
    }
)

const variantClass = ref<string[]>([variantClasses[props.variant]])
</script>

<template>
    <button :class="[...variantClass]">
        <slot></slot>
    </button>
</template>
