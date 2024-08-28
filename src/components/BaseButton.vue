<script setup lang="ts">
import { ref, defineProps, withDefaults } from 'vue'

import { type VariantEnum, variantClasses } from '../utils/variants'

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
