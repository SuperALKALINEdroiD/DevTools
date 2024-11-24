import { createRouter, createWebHistory } from 'vue-router'
import JsonEditor from './components/JsonEditor.vue'
import TextConverter from './components/TextConverter.vue'
import JwtDecoder from './components/JwtDecoder.vue'
import TimestampConverter from './components/TimestampConverter.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: JsonEditor,
    },
    {
      path: '/text-converter',
      component: TextConverter,
    },
    {
      path: '/jwt-decoder',
      component: JwtDecoder,
    },
    {
      path: '/timestamp-converter',
      component: TimestampConverter,
    },
  ],
})