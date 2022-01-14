<template>
  <div class="policy-list">
    <div class="chk-all">
      <slot name="all"></slot>
    </div>
    <div class="chk-list">
      <slot name="list"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "policy-list",
};
</script>

<style scoped lang="scss">
.policy-list {
  margin-top: 60px;
  .chk-all {
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;
  }
  .chk-list {
    .form-checkbox {
      & + .form-checkbox {
        margin-top: 15px;
      }
    }
  }
}
.mobile {
}
</style>
