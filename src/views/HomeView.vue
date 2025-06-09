<template>
  <div class="p-6">
    <!--Input de búsqueda-->
    <input
      type="text"
      v-model="search"
      placeholder="Search for a country..."
      class="border px-3 py-2 rounded w-full mb-6"
    />

    <!--Lista de países filtrados-->
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <li v-for="country in filteredCountries" :key="country.alpha3Code">
        <CountryCard :country="country" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Country } from "../types/Country";
import CountryCard from "./CountryCard.vue";
import { ref, onMounted, computed } from "vue";
import countriesData from "../../data.json";

// Estado reactivo para países y búsqueda
//Lo más limpio y recomendable es tipar bien desde el inicio así:
const countries = ref<Country[]>([]);
const search = ref("");

// Al montar el componente, cargamos los datos
onMounted(() => {
  countries.value = countriesData;
});

// Lista filtrada de países, actualizada automáticamente cuando search cambia
const filteredCountries = computed(() => {
  return countries.value.filter((country) =>
    country.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<style scoped></style>
