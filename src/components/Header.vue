<template>
  <header
    class="w-full shadow px-6 py-4 bg-white dark:bg-darkElement flex justify-between items-center"
  >
    <h1 class="font-bold text-base sm:text-lg text-lightText dark:text-white">
      Where in the world?
    </h1>
    <button @click="toggleDark" class="text-lightText dark:text-white text-sm">
      <span v-if="isDark">🌞 Light Mode</span>
      <span v-else>🌙 Dark Mode</span>
    </button>
  </header>
</template>

<script setup lang="ts">
import { inject } from "vue";
import type { Ref } from "vue";

const isDark = inject("isDark") as Ref<boolean>;
const toggleDark = inject("toggleDark") as () => void;
</script>
