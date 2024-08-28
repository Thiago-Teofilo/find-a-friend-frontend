<script setup lang="ts">
import SelectInput from '../components/SelectInput.vue'
import Button from '../components/Button.vue'
import { FaSearch } from 'vue3-icons/fa'
</script>

<template>
    <div id="home" class="content px-28 py-32">
        <main class="grid grid-cols-2 gap-32">
            <img src="../assets/icons/logo_variant_1.svg" alt="logo" />
            <img
                class="self-end justify-self-end row-span-2"
                src="../assets/images/objects.svg"
                alt=""
            />
            <h1>Leve a felicidade para o seu lar</h1>
            <p>Encontre o animal de estimação ideal para seu estilo de vida!</p>
            <div class="grid w-max justify-self-end grid-cols-4 gap-6 items-center">
                <label class="text-[1rem] text-right" for="">Busque um amigo</label>
                <div class="grid col-span-2 gap-2 grid-cols-3 justify-stretch">
                    <SelectInput
                        variant="secondary"
                        class="w-16 justify-self-end"
                        placeholder="UF"
                        :options="{
                            PE: 'PE',
                            SP: 'SP'
                        }"
                    />
                    <SelectInput
                        variant="primary"
                        class="w-full col-span-2"
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

<style lang="postcss"></style>
