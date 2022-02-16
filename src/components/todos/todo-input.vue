<template>
  <div class="input-box">
    <input
      type="text"
      class="todo-input"
      v-model="todoValue"
      ref="input"
      @keydown.enter="addTodo"
    />
    <button
      type="button"
      :class="{ 'btn-add': true, active: todoValue }"
      @click="addTodo"
    >
      Add
    </button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const todoMutations = createNamespacedHelpers("todo");

export default {
  name: "todo-input",
  data() {
    return {
      todoValue: "",
    };
  },
  mounted() {
    this.$refs.input.focus();
  },
  methods: {
    addTodo() {
      if (this.todoValue === "") {
        this.$refs.input.focus();
        return;
      }
      this.commitEvent(this.todoValue);
      this.todoValue = "";
      this.$refs.input.focus();
    },
    ...todoMutations.mapMutations({ commitEvent: "ADD_TODO" }),
  },
};
</script>

<style scoped lang="scss">
.input-box {
  display: flex;
  .todo-input {
    flex: 1;
    border: 1px solid #bbb;
    background: none;
    border-radius: 10px;
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.5);
    font-size: 20px;
    line-height: 1.5;
  }
  .btn-add {
    margin-left: 10px;
  }
}
</style>
