<template>
  <button type="button" :class="{ btn: true, 'btn-cancel': type === 'cancel' }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "form-button",
  props: ["type"],
};
</script>

<style scoped lang="scss">
[class^="btn"] {
  display: block;
  box-sizing: border-box;
  min-width: 155px;
  border: 1px solid #00d4ac;
  border-radius: 15px;
  padding: 12px 20px;
  background: #00d4ac;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  &[class*="cancel"] {
    border-color: #ddd;
    background: #fff;
    color: #000;
  }
}
</style>
