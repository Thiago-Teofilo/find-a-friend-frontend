<script setup lang="ts">
import SelectInput from '../components/SelectInput.vue'
import Button from '../components/BaseButton.vue'
import { FaSearch } from 'vue3-icons/fa'
</script>

<template>
    <div id="home" class="content px-28 py-32 fade-in-opacity">
        <main class="grid grid-cols-2 gap-32">
            <img src="../assets/icons/logo_variant_1.svg" alt="logo" />
            <img
                class="self-end justify-self-end row-span-2 fade-in-left"
                src="../assets/images/objects.svg"
                alt="Cachorros"
            />
            <h1>Leve a felicidade para o seu lar</h1>
            <p class="flex items-center">
                Encontre o animal de estimação ideal para seu estilo de vida!
            </p>
            <div class="flex gap-6 items-center justify-end">
                <label class="text-[1rem] text-right" for="">Busque um amigo</label>
                <div class="flex gap-2">
                    <SelectInput
                        variant="primary"
                        class="w-16"
                        placeholder="UF"
                        :options="{
                            PE: 'PE',
                            SP: 'SP'
                        }"
                    />
                    <SelectInput
                        variant="primary"
                        class="w-64"
                        placeholder="Cidade"
                        :options="{
                            Sorocaba: 'sorocaba',
                            Socorro: 'socorro'
                        }"
                    />
                </div>
                <Button class="w-16" variant="tertiary">
                    <FaSearch class="m-auto" />
                </Button>
            </div>
        </main>
    </div>
</template>

<style lang="postcss">
@keyframes fadeInLeft {
    0% {
        opacity: 0;
        transform: translateX(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in-left {
    animation: fadeInLeft 1s ease-out;
}

@keyframes fadeInOpacity {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.fade-in-opacity {
    animation: fadeInOpacity 0.3s ease-out;
}
</style>
