<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex h-screen bg-gray-900 text-white">
    <Sidebar />
    <main class="flex-1 p-8 overflow-auto">
      <RouterView />
    </main>
  </div>
</template>