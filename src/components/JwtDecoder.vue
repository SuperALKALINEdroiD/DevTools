<script setup lang="ts">
import { ref, computed } from 'vue'
import { jwtDecode } from 'jwt-decode'

const jwtToken = ref('')
const decodedToken = computed(() => {
  if (!jwtToken.value) return null
  try {
    return jwtDecode(jwtToken.value)
  } catch (e) {
    return null
  }
})
</script>

<template>
  <div>
    <h2 class="text-2xl mb-4">JWT Decoder</h2>
    <div class="grid gap-4">
      <div>
        <label class="block mb-2">JWT Token:</label>
        <textarea
          v-model="jwtToken"
          class="w-full h-24 p-2 rounded bg-gray-800 text-white"
          placeholder="Paste your JWT token here..."
        ></textarea>
      </div>
      <div v-if="decodedToken">
        <label class="block mb-2">Decoded Token:</label>
        <pre class="bg-gray-800 p-4 rounded overflow-auto">{{ JSON.stringify(decodedToken, null, 2) }}</pre>
      </div>
      <div v-else-if="jwtToken" class="text-red-400">
        Invalid JWT token
      </div>
    </div>
  </div>
</template>