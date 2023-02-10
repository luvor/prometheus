<script setup lang="ts">
import { ref } from 'vue'
const checkboxList = ref([
  {
    id: 1,
    text: 'Приложение работает быстро',
    checked: false,
  },
  {
    id: 2,
    text: 'Приложение незначительно даёт сбои',
    checked: false,
  },
  {
    id: 3,
    text: 'Приложение постоянно даёт сбои',
    checked: false,
  },
  {
    id: 4,
    text: 'Плохой дизайн приложения',
    checked: false,
  },
])
</script>
<template>
  <!-- every day feedback to our bank app with checkboxes and button -->
  <div class="p-4 rounded-md bg-white border m-2">
    <h3>Добрый день! Оставьте отзыв о нашем приложении</h3>
    <div class="flex flex-col text-gray-500">
      <label v-for="checkbox in checkboxList" :key="checkbox.id" class="flex items-center gap-2 py-2">
        <input type="checkbox" class="rounded-md" />
        <span class="">{{ checkbox.text }}</span>
      </label>
    </div>
  </div>
</template>
