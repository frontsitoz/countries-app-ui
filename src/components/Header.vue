<template>
  <header
    class="w-full bg-white dark:bg-gray-800 shadow px-6 py-4 flex justify-between items-center"
  >
    <h1 class="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
      Where in the world?
    </h1>

    <button
      @click="toggleDark"
      class="flex items-center gap-2 text-sm sm:text-base text-gray-800 dark:text-white hover:underline"
    >
      <span v-if="isDark">☀️ Light Mode</span>
      <span v-else>🌙 Dark Mode</span>
    </button>
  </header>
</template>

<script setup lang="ts">
import { inject } from "vue";

// `isDark` y `toggleDark` vienen de App.vue o del estado global
const isDark = inject("isDark") as any;
const toggleDark = inject("toggleDark") as () => void;
</script>
