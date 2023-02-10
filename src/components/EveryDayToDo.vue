<script setup lang="ts">
import { ref } from 'vue'

import { sendFeedbackBot } from '@/services/telegramBot'

const ownFeedback = ref('')
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

const handleCheck = (id: number) => {
  checkboxList.value = checkboxList.value.map((checkbox) => {
    if (checkbox.id === id) {
      checkbox.checked = !checkbox.checked
    }
    return checkbox
  })
}

const handleSend = () => {
  const checkedList = checkboxList.value.filter((checkbox) => checkbox.checked)
  const checkedListText = checkedList.map((checkbox) => `[+] ${checkbox.text}`).join('\n')
  const text = `${checkedListText} \nКомментарий: ${ownFeedback.value}`
  sendFeedbackBot(text)
}
</script>
<template>
  <!-- every day feedback to our bank app with checkboxes and button -->
  <div class="p-4 rounded-md bg-white border m-2">
    <h3>Добрый день! Оставьте отзыв о нашем приложении</h3>

    {{ checkboxList.map((checkbox) => checkbox.checked) }}
    <div class="flex flex-col text-gray-500">
      <label v-for="checkbox in checkboxList" :key="checkbox.id" class="flex items-center gap-2 py-2">
        <input type="checkbox" :checked="checkbox.checked" class="rounded-md" @click="handleCheck(checkbox.id)" />
        <span class="">{{ checkbox.text }}</span>
      </label>
      <div class="mt-2 w-full">
        <input v-model="ownFeedback" type="text" class="w-full" placeholder="Напишите свой вариант" />
      </div>
    </div>
    <button class="bg-violet-500 text-white rounded-md p-2 mt-4 w-full" @click="handleSend">Отправить</button>
  </div>
</template>
