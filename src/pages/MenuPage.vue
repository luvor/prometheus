<script lang="ts" setup>
import { ref } from 'vue'

const newTodoText = ref('')
const editTodoText = ref('')
const editTodoId = ref<string>()

const onlyUncheckedFilter = ref(false)
const todoList = ref([
  {
    id: '1',
    text: 'Приложение работает быстро',
    checked: false,
  },
  {
    id: '2',
    text: 'Приложение незначительно даёт сбои',
    checked: false,
  },
  {
    id: '3',
    text: 'Приложение постоянно даёт сбои',
    checked: false,
  },
  {
    id: '4',
    text: 'Плохой дизайн приложения',
    checked: false,
  },
])

const makeid = (length: number) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}

const handleCheck = (id: string) => {
  todoList.value = todoList.value.map((todo) => {
    if (todo.id === id) {
      todo.checked = !todo.checked
    }
    return todo
  })
}

const addTodo = (text: string) => {
  const newTodo = {
    id: makeid(5),
    text,
    checked: false,
  }
  todoList.value.push(newTodo)
  newTodoText.value = ''
}

const deleteTodo = (id: string) => {
  todoList.value = todoList.value.filter((todo) => todo.id !== id)
}

const editTodo = (id: string) => {
  const todo = todoList.value.find((todo) => todo.id === id)
  if (todo) {
    editTodoText.value = todo.text
    editTodoId.value = todo.id
  }
}

const handleEditTodo = (text: string) => {
  todoList.value = todoList.value.map((todo) => {
    if (todo.id === editTodoId.value) {
      todo.text = text
    }
    return todo
  })
  editTodoId.value = ''
  editTodoText.value = ''
}

const showOnlyUnchecked = () => {
  onlyUncheckedFilter.value = !onlyUncheckedFilter.value
  todoList.value = todoList.value.filter((todo) => !todo.checked)
}
</script>
<template>
  <div class="p-4">
    <h3 class="font-bold text-xl mb-2">Todo CRUD</h3>
    <div v-show="!editTodoId" class="flex gap-2">
      <input v-model="newTodoText" type="text" class="w-full rounded-3xl" placeholder="сделать таск..." />
      <button class="px-6 py-1 bg-violet-500 rounded-3xl text-white" @click="addTodo(newTodoText)">Добавить</button>
    </div>
    <div v-show="editTodoId" class="flex gap-2">
      <input v-model="editTodoText" type="text" class="w-full rounded-3xl" placeholder="сделать таск..." />
      <button class="px-6 py-1 bg-violet-500 rounded-3xl text-white" @click="handleEditTodo(editTodoText)">Сохранить</button>
    </div>
    <div class="flex gap-2">
      <button class="px-6 py-1 bg-green-400 text-white rounded-3xl mt-4 mx-auto" @click="showOnlyUnchecked">Показать только невыполненные</button>
    </div>
    <div class="flex flex-col gap-y-2 my-4 text-gray-500">
      <label v-for="todo in todoList" :key="todo.id" class="flex items-center gap-2 py-2">
        <input type="checkbox" :checked="todo.checked" class="rounded-md" @click="handleCheck(todo.id)" />
        <span class="">{{ todo.text }}</span>
        <div class="ml-auto">
          <button class="mr-2 px-2 py-1 bg-green-400 rounded-3xl text-white" @click="editTodo(todo.id)"><IconEdit /></button>
          <button class="px-2 py-1 bg-rose-500 rounded-3xl text-white" @click="deleteTodo(todo.id)"><IconDelete /></button>
        </div>
      </label>
    </div>

    <div class="flex flex-col text-gray-500">
      <div class="flex gap-2 py-2">
        <span>Всего задач: {{ todoList.length }}</span>
        <span>Выполнено: {{ todoList.filter((todo) => todo.checked).length }}</span>
        <span>Осталось: {{ todoList.filter((todo) => !todo.checked).length }}</span>
      </div>
    </div>
  </div>
</template>
