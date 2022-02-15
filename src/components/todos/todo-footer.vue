<template>
  <footer class="footer">
    <button type="button" class="btn-all-del" @click="clearAll">
      Delete All
    </button>
  </footer>
</template>

<script>
export default {
  name: "todo-footer",
  methods: {
    clearAll() {
      this.$store.commit("todo/CLEAR_ALL");
    },
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
  background: #888;
  opacity: 0.5;
}
</style>
