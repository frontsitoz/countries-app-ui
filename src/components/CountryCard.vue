<template>
  <router-link
    :to="`/country/${country.alpha3Code}`"
    class="block"
    :aria-label="`View details of ${country.name}`"
  >
    <div
      class="bg-white dark:bg-darkElement text-black dark:text-white rounded shadow hover:scale-[1.02] transition"
    >
      <img
        :src="country.flags.png"
        :alt="`Flag of ${country.name}`"
        class="w-full h-40 object-cover rounded-t"
      />
      <div class="p-4">
        <h2 class="font-extrabold text-lg mb-2">{{ country.name }}</h2>
        <p class="text-sm">
          <strong>Population:</strong> {{ country.population.toLocaleString() }}
        </p>
        <p class="text-sm"><strong>Region:</strong> {{ country.region }}</p>
        <p v-if="country.capital" class="text-sm">
          <strong>Capital:</strong> {{ country.capital }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { Country } from "../types/Country";
defineProps<{ country: Country }>();
</script>
