<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { VueMonacoEditor } from '@guolao/vue-monaco-editor'

const jsonInput = ref('{\n  "example": "Enter your JSON here"\n}')
const editor = shallowRef()

const editorOptions = {
  theme: 'vs-dark',
  language: 'json',
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
  minimap: { enabled: false },
  fontSize: 14,
  tabSize: 2
}

const handleMount = (editorInstance: any) => {
  editor.value = editorInstance
}

const formatJson = () => {
  try {
    // Try to convert string to JSON if it's not already JSON
    const input = jsonInput.value.trim()
    if (!input.startsWith('{') && !input.startsWith('[')) {
      // Attempt to convert string to JSON object
      jsonInput.value = JSON.stringify({ value: input }, null, 2)
    }
    // Use Monaco's built-in formatter
    editor.value?.getAction('editor.action.formatDocument').run()
  } catch (e) {
    alert('Invalid input')
  }
}

const prettifyJson = () => {
  try {
    const input = jsonInput.value.trim()
    // Handle string to JSON conversion
    if (!input.startsWith('{') && !input.startsWith('[')) {
      jsonInput.value = JSON.stringify({ value: input }, null, 2)
    } else {
      const parsed = JSON.parse(jsonInput.value)
      jsonInput.value = JSON.stringify(parsed, null, 2)
    }
  } catch (e) {
    alert('Invalid input')
  }
}

const minifyJson = () => {
  try {
    const input = jsonInput.value.trim()
    // Handle string to JSON conversion
    if (!input.startsWith('{') && !input.startsWith('[')) {
      jsonInput.value = JSON.stringify({ value: input })
    } else {
      const parsed = JSON.parse(jsonInput.value)
      jsonInput.value = JSON.stringify(parsed)
    }
  } catch (e) {
    alert('Invalid input')
  }
}
</script>

<template>
  <div>
    <h2 class="text-2xl mb-4">JSON Editor</h2>
    <div class="mb-4 space-x-2">
      <button
        @click="formatJson"
        class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        title="Format using editor's formatter (converts string to JSON)"
      >
        Format
      </button>
      <button
        @click="prettifyJson"
        class="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
        title="Pretty print with 2 spaces (converts string to JSON)"
      >
        Prettify
      </button>
      <button
        @click="minifyJson"
        class="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded"
        title="Remove all whitespace (converts string to JSON)"
      >
        Minify
      </button>
    </div>
    <div class="h-[600px] rounded overflow-hidden border border-gray-700">
      <VueMonacoEditor
        v-model:value="jsonInput"
        :options="editorOptions"
        @mount="handleMount"
      />
    </div>
  </div>
</template>