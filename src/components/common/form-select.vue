<template>
  <select
    @change="selectActive"
    :class="{ selected: changed, disabled: disabled }"
    :disabled="disabled"
  >
    <option :value="options.placeholder" selected disabled>
      {{ options.placeholder }}
    </option>
    <option v-for="item in options.list" :key="item.id" :value="item.id">
      {{ item.value }}
    </option>
  </select>
</template>

<script>
export default {
  name: "form-select",
  props: {
    options: Object,
    selected: String,
    disabled: Boolean,
  },
  model: {
    prop: "selected",
  },
  data() {
    return {
      changed: false,
    };
  },
  methods: {
    selectActive($event) {
      this.changed = true;
      this.$emit("input", $event.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
select {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 11px 15px;
  font-size: 14px;
  line-height: 20px;
  color: #bbb;
  background: url(../../assets/images/ic-down-20.svg) right 15px center
    no-repeat;
  cursor: pointer;
  &:focus,
  &:active {
    border-color: #00d4ac;
  }
  &.selected {
    color: #000;
  }
  option {
    color: #000;
  }
  &.disabled {
    cursor: default;
    background-color: #f7f7f7;
    background-image: url(../../assets/images/ic-down-20-gr.svg);
    color: #bbb;
  }
}
</style>
