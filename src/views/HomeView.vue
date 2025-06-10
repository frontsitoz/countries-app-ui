<template>
  <div class="py-8">
    <!-- Contenedor de búsqueda y filtro -->
    <div
      class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12"
    >
      <!-- Buscador -->
      <div class="relative w-full sm:max-w-md shadow-md">
        <span
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"
          >🔍</span
        >
        <input
          v-model="search"
          type="text"
          placeholder="Search for a country..."
          class="w-full pl-10 py-3 rounded bg-white dark:bg-darkElement text-sm text-lightText dark:text-white focus:outline-none"
        />
      </div>

      <!-- Filtro por región -->
      <div class="relative w-52 shadow-md">
        <select
          v-model="selectedRegion"
          class="appearance-none w-full py-3 pl-4 pr-8 rounded bg-white dark:bg-darkElement text-sm text-lightText dark:text-white focus:outline-none"
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        <!-- Flecha custom en esquina derecha -->
        <div
          class="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500 text-xs"
        >
          ▼
        </div>
      </div>
    </div>

    <!-- Lista de países -->
    <ul
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
    >
      <CountryCard
        v-for="country in paginatedCountries"
        :key="country.alpha3Code"
        :country="country"
      />
    </ul>

    <!-- Paginación -->
    <div class="flex justify-center mt-10 gap-4">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 rounded bg-white dark:bg-[#2b3945] text-[#111517] dark:text-white shadow disabled:opacity-50"
      >
        Previous
      </button>
      <button
        @click="nextPage"
        :disabled="endIndex >= filteredCountries.length"
        class="px-4 py-2 rounded bg-white dark:bg-[#2b3945] text-[#111517] dark:text-white shadow disabled:opacity-50"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
// Make sure the path is correct; if CountryCard.vue is in src/components, keep as is.
// If the file does not exist, create it with a basic component template:
import CountryCard from "../components/CountryCard.vue";
import countriesData from "../../data.json";
import type { Country } from "../types/Country";

const countries = ref<Country[]>([]);
const search = ref("");
const currentPage = ref(1);
const perPage = 8;

onMounted(() => {
  countries.value = countriesData.map((country: any) => ({
    ...country,
    borders: Array.isArray(country.borders) ? country.borders : [],
  }));
});
const selectedRegion = ref("");

const filteredCountries = computed(() => {
  return countries.value.filter((c) => {
    const matchesSearch = c.name
      .toLowerCase()
      .includes(search.value.toLowerCase());

    const matchesRegion = selectedRegion.value
      ? c.region === selectedRegion.value
      : true;

    return matchesSearch && matchesRegion;
  });
});

const startIndex = computed(() => (currentPage.value - 1) * perPage);
const endIndex = computed(() => currentPage.value * perPage);
const paginatedCountries = computed(() =>
  filteredCountries.value.slice(startIndex.value, endIndex.value)
);

const prevPage = () => currentPage.value--;
const nextPage = () => currentPage.value++;
</script>
