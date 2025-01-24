<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const links = [
  { path: '/', name: 'JSON Editor', icon: '📝' },
  { path: '/text-converter', name: 'Text Converter', icon: '↔️' },
  { path: '/jwt-decoder', name: 'JWT Decoder', icon: '🔑' },
  { path: '/timestamp-converter', name: 'Timestamp Converter', icon: '⏰' },
  { path: '/js-notebook', name: 'Javascript Notebook', icon: '⏰' },
]
</script>

<template>
  <aside class="w-64 bg-gray-800 p-4">
    <h1 class="text-xl font-bold mb-8 text-center">Dev ToolBox</h1>
    <nav>
      <RouterLink
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="block mb-2 p-3 rounded hover:bg-gray-700 transition-colors"
        :class="{ 'bg-gray-700': route.path === link.path }"
      >
        {{ link.name }}
      </RouterLink>
    </nav>
  </aside>
</template>