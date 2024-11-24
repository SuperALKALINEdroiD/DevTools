<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
const output = ref('')

const convertToOneLine = () => {
  output.value = input.value.replace(/[\r\n]+/g, ' ').trim()
}
</script>

<template>
  <div>
    <h2 class="text-2xl mb-4">Text to One Line Converter</h2>
    <div class="grid gap-4">
      <div>
        <label class="block mb-2">Input Text:</label>
        <textarea
          v-model="input"
          class="w-full h-48 p-2 rounded bg-gray-800 text-white"
          placeholder="Paste your multi-line text here..."
        ></textarea>
      </div>
      <button
        @click="convertToOneLine"
        class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
      >
        Convert to One Line
      </button>
      <div>
        <label class="block mb-2">Output:</label>
        <textarea
          v-model="output"
          readonly
          class="w-full h-24 p-2 rounded bg-gray-800 text-white"
          placeholder="Result will appear here..."
        ></textarea>
      </div>
    </div>
  </div>
</template>