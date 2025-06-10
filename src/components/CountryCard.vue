<template>
  <li class="bg-white dark:bg-[#2b3945] rounded overflow-hidden shadow-md">
    <img
      :src="country.flags.png"
      :alt="`Flag of ${country.name}`"
      class="w-full h-40 object-cover"
    />
    <div class="p-4">
      <h2 class="font-extrabold text-base mb-2 text-[#111517] dark:text-white">
        {{ country.name }}
      </h2>
      <p class="text-sm text-[#111517] dark:text-white">
        <strong>Population:</strong> {{ country.population.toLocaleString() }}
      </p>
      <p class="text-sm text-[#111517] dark:text-white">
        <strong>Region:</strong> {{ country.region }}
      </p>
      <p class="text-sm text-[#111517] dark:text-white" v-if="country.capital">
        <strong>Capital:</strong> {{ country.capital }}
      </p>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { Country } from "../types/Country";

defineProps<{ country: Country }>();
</script>
