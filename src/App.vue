<template>
  <div
    :class="{ dark: isDark }"
    class="bg-gray-100 dark:bg-gray-900 min-h-screen"
  >
    <Header />
    <main class="container mx-auto px-6 pt-6">
      <HomeView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import HomeView from "./views/HomeView.vue";
import Header from "./components/Header.vue";

//Modo oscuro global
const isDark = ref(false);
const toggleDark = () => (isDark.value = !isDark.value);

//Proveer a toda la app
provide("isDark", isDark);
provide("toggleDarK", toggleDark);
</script>

<style scoped></style>
