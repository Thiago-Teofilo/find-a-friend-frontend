<script lang="ts" setup>
import SelectInput from './SelectInput.vue'
</script>

<template>
    <div>
        <div>
            <label for="age">Idade</label>
            <SelectInput
                name="age"
                id="age"
                :options="[
                    {
                        value: 'young',
                        content: 'Filhote'
                    },
                    {
                        value: 'adult',
                        content: 'Adulto'
                    }
                ]"
            />
        </div>
        <div>
            <label for="energyLevel">Nível de Energia</label>
            <SelectInput
                name="energyLevel"
                id="energyLevel"
                :options="[
                    {
                        value: 'young',
                        content: 'Filhote'
                    },
                    {
                        value: 'adult',
                        content: 'Adulto'
                    }
                ]"
            />
        </div>
        <div>
            <label for="size">Porte do animal</label>
            <SelectInput
                name="size"
                id="size"
                :options="[
                    {
                        value: 'young',
                        content: 'Filhote'
                    },
                    {
                        value: 'adult',
                        content: 'Adulto'
                    }
                ]"
            />
        </div>
        <div>
            <label for="independenceLevel">Nível de independência</label>
            <SelectInput
                name="independenceLevel"
                id="independenceLevel"
                :options="[
                    {
                        value: 'young',
                        content: 'Filhote'
                    },
                    {
                        value: 'adult',
                        content: 'Adulto'
                    }
                ]"
            />
        </div>
    </div>
</template>
