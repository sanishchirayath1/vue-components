<script setup lang="ts">
import TodoListElement from '../components/TodoListElement.vue';
import TodoListInput from '../components/TodoListInput.vue';
import { useTodosStore } from '../stores/store';

const todosStore = useTodosStore();
</script>
<template>
  <main>
    <h1>Todos</h1>
    <div class="todos">
      <TodoListElement v-for="todo in todosStore.todos" :key="todo.id" :todo="todo" />
      <TodoListInput />
    </div>
  </main>
</template>

<style scoped>
/* stylelint-disable */
</style>
