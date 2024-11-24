<script setup lang="ts">
import { ref, watch } from 'vue'

// Initialize with the current time
const now = new Date()
const timestamp = ref(Math.floor(now.getTime() / 1000).toString())
const dateString = ref(
  `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
)

// Update timestamp when date changes
watch(dateString, (newDate) => {
  try {
    const date = new Date(newDate)
    if (!isNaN(date.getTime())) {
      timestamp.value = Math.floor(date.getTime() / 1000).toString()
    }
  } catch (e) {
    // Invalid date input
  }
}, { immediate: true })

// Set current time
const setCurrentTime = () => {
  const now = new Date()
  dateString.value = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
  timestamp.value = Math.floor(now.getTime() / 1000).toString()
}
</script>

<template>
  <div>
    <h2 class="text-2xl mb-4">Timestamp Converter</h2>
    <div class="grid gap-4 max-w-xl">
      <button
        @click="setCurrentTime"
        class="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded w-full"
      >
        Back to the Present
      </button>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Timestamp Input -->
        <div class="space-y-2">
          <label class="block font-medium">Unix Timestamp:</label>
          <input
            v-model="timestamp"
            type="text"
            class="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Enter timestamp..."
          />
          <div class="text-sm text-gray-400">
            Seconds since Unix epoch
          </div>
        </div>

        <!-- Date Input -->
        <div class="space-y-2">
          <label class="block font-medium">Date & Time:</label>
          <input
            v-model="dateString"
            type="datetime-local"
            class="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <div class="text-sm text-gray-400">
            Local datetime
          </div>
        </div>
      </div>

      <!-- Human Readable Display -->
      <div class="mt-4 p-4 bg-gray-800 rounded border border-gray-700">
        <div class="grid gap-2">
          <div>
            <span class="text-gray-400">Human readable: </span>
            <span>{{ new Date(parseInt(timestamp) * 1000).toLocaleString() }}</span>
          </div>
          <div>
            <span class="text-gray-400">ISO string: </span>
            <span>{{ new Date(parseInt(timestamp) * 1000).toISOString() }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
