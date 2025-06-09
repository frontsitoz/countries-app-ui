<template>
  <div class="border rounded shadow p-4 hover:shadow-md transition">
    <img
      :src="country.flags.png"
      :alt="`Flag of ${country.name}`"
      class="w-full h-36 object-cover rounded mb-4"
    />

    <h2 class="font-bold text-lg mb-1">{{ country.name }}</h2>
    <p class="text-sm text-gray-600" v-if="country.capital">
      Capital: <span class="font-medium"> {{ country.capital }}</span>
    </p>
    <p class="text-sm text-gray-600">
      Population:
      <span class="font-medium">
        {{ country.population.toLocaleString() }}</span
      >
    </p>
    <p class="text-sm text-gray-600">
      Region: <span class="font-medium"> {{ country.region }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Country } from "../types/Country";

defineProps<{
  country: Country;
}>();
</script>

<style scoped></style>
