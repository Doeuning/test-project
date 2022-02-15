<template>
  <div class="todo-app">
    <todo-header />
    <todo-input />
    <todo-list />
    <todo-footer />
  </div>
</template>

<script>
import todoHeader from "@/components/todos/todo-header";
import todoInput from "@/components/todos/todo-input";
import todoList from "@/components/todos/todo-list";
import todoFooter from "@/components/todos/todo-footer";

export default {
  name: "todo-app",
  components: {
    todoHeader,
    todoInput,
    todoList,
    todoFooter,
  },
};
</script>

<style scoped lang="scss">
.todo-app {
  max-width: 500px;
  margin: 0 auto;
  padding: 50px;
  background: #eee;
}
</style>
