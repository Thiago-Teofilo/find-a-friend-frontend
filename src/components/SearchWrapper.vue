<script setup lang="ts">
import { FaSearch } from 'vue3-icons/fa'
import { ref, defineProps, withDefaults } from 'vue'
import { useRouter } from 'vue-router'

import SelectInput from './SelectInput.vue'

type variantEnum = 'primary' | 'secondary' | 'secondary-outlined'
const variantClasses: Record<variantEnum, string> = {
    primary: 'bg-primary-alt',
    secondary: 'bg-primary border border-solid border-white',
    'secondary-outlined': 'bg-primary-alt border border-solid border-border'
}

const props = withDefaults(
    defineProps<{
        withLabel?: boolean
        firstSelectVariant?: variantEnum
        secondSelectVariant?: variantEnum
    }>(),
    {
        withLabel: false,
        firstSelectVariant: 'primary',
        secondSelectVariant: 'primary'
    }
)

const firstSelectClass = ref<string[]>([variantClasses[props.firstSelectVariant]])
const secondSelectClass = ref<string[]>([variantClasses[props.secondSelectVariant]])

const state = ref<string | null>('PE')
const city = ref<string | null>('Recife')

const router = useRouter()

function handleSearch() {
    router.push('/search')
}
</script>

<template>
    <div class="grid grid-cols-4 text-white gap-4">
        <label v-if="props.withLabel" class="col-span-4 text-sm">Busque um amigo:</label>
        <SelectInput
            v-model="state"
            id="state"
            name="state"
            class="w-16 place-self-end"
            :variant="props.firstSelectVariant"
            :options="[
                {
                    value: 'MG',
                    content: 'MG'
                },
                {
                    value: 'PE',
                    content: 'PE'
                }
            ]"
        />
        <SelectInput
            v-model="city"
            name="city"
            id="city"
            class="w-full col-span-2"
            :variant="props.secondSelectVariant"
            :options="[
                {
                    value: 'Recife',
                    content: 'Recife'
                },
                {
                    value: 'Socorro',
                    content: 'Socorro'
                }
            ]"
        />
        <button
            class="bg-tertiary w-16 rounded-lg border border-solid text-secondary border-secondary"
            @click="handleSearch"
        >
            <FaSearch class="m-auto" />
        </button>
    </div>
</template>
