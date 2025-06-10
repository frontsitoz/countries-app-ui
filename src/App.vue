<!-- App.vue -->
<template>
  <div :class="{ dark: isDark }">
    <div
      class="min-h-screen bg-gray-100 dark:bg-darkBg font-sans transition-colors duration-300"
    >
      <Header />
      <main class="container mx-auto px-6 py-10">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import Header from "./components/Header.vue";

const isDark = ref(false);
const toggleDark = () => (isDark.value = !isDark.value);

provide("isDark", isDark);
provide("toggleDark", toggleDark);
</script>
