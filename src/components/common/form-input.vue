<template>
  <input
    :type="object.type ? object.type : 'text'"
    :value="object.value"
    :placeholder="object.placeholder ? object.placeholder : ''"
    @input="bindText"
  />
</template>

<script>
export default {
  name: "form-input",
  props: {
    object: Object,
    putInput: String,
  },
  model: {
    prop: "putInput",
  },
  methods: {
    bindText($event) {
      this.$emit("input", $event.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
input {
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 11px 15px;
  &:focus,
  &:active {
    border-color: #00d4ac;
  }
}
</style>
