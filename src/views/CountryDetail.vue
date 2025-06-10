<template>
  <section
    class="min-h-screen bg-gray-100 dark:bg-darkBg text-gray-900 dark:text-white px-6 py-10"
  >
    <button
      @click="goBack"
      class="bg-white dark:bg-darkElement text-sm px-6 py-2 shadow-md rounded flex items-center gap-2 mb-12"
    >
      ← Back
    </button>

    <div v-if="country" class="flex flex-col lg:flex-row gap-16">
      <img
        :src="country.flags.svg"
        :alt="`Flag of ${country.name}`"
        class="w-full lg:w-1/2 h-auto object-contain shadow"
      />

      <div class="flex flex-col justify-center gap-4">
        <h2 class="text-2xl font-bold mb-4">{{ country.name }}</h2>

        <div class="flex flex-col sm:flex-row gap-8 mb-4">
          <div>
            <p><strong>Native Name:</strong> {{ country.nativeName }}</p>
            <p>
              <strong>Population:</strong>
              {{ country.population.toLocaleString() }}
            </p>
            <p><strong>Region:</strong> {{ country.region }}</p>
            <p><strong>Sub Region:</strong> {{ country.subregion }}</p>
            <p><strong>Capital:</strong> {{ country.capital }}</p>
          </div>
          <div>
            <p>
              <strong>Top Level Domain:</strong>
              {{ country.topLevelDomain.join(", ") }}
            </p>
            <p><strong>Currencies:</strong> {{ currencies }}</p>
            <p><strong>Languages:</strong> {{ languages }}</p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-start gap-2">
          <strong>Border Countries:</strong>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="border in country.borders"
              :key="border"
              class="px-4 py-1 text-sm shadow bg-white dark:bg-darkElement rounded"
            >
              {{ getCountryNameByCode(border) }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import countriesData from "../../data.json";
import type { Country } from "../types/Country";

const route = useRoute();
const router = useRouter();
const country = ref<Country | null>(null);

const countryCode = route.params.code as string;

onMounted(() => {
  const match = (countriesData as Country[]).find(
    (c) => c.alpha3Code === countryCode
  );
  if (match) {
    country.value = match;
  } else {
    router.push("/");
  }
});

const currencies = computed(() =>
  country.value?.currencies?.map((c) => c.name).join(", ")
);
const languages = computed(() =>
  country.value?.languages?.map((l) => l.name).join(", ")
);

const getCountryNameByCode = (code: string) => {
  const match = (countriesData as Country[]).find((c) => c.alpha3Code === code);
  return match?.name || code;
};

const goBack = () => {
  router.back();
};
</script>

<style scoped></style>
