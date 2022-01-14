<template>
  <div class="flex-btn-wrap">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "flex-btn-wrap",
};
</script>

<style scoped lang="scss">
.flex-btn-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  & > * + * {
    margin-left: 10px;
  }
}
</style>
