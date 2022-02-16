<template>
  <footer class="footer">
    <button
      type="button"
      :class="{
        'btn-all-del': true,
        active: this.$store.state.todo.list.length,
      }"
      @click="clearAll"
    >
      Delete All
    </button>
  </footer>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "todo-footer",
  methods: {
    ...mapMutations("todo", { clearAll: "CLEAR_ALL" }),
  },
};
</script>

<style scoped lang="scss">
.footer {
  margin: 30px 0 0;
  text-align: center;
}
.btn-all-del {
  width: 100%;
}
</style>
