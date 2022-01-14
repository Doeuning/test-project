<template>
  <div class="wrap">
    <div class="page-head">
      <slot name="head"></slot>
    </div>
    <div class="page-contents">
      <slot name="contents"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "base-body",
};
</script>

<style scoped lang="scss">
.wrap {
  padding: 40px 0 100px;
  .page-head {
    margin-bottom: 50px;
  }
  .mobile & {
    padding: 40px 20px 100px;
  }
}
</style>
