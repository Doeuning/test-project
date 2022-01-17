<template>
  <label
    class="form-checkbox"
    :class="{ checked: classBind, disabled: disabled }"
  >
    <input type="checkbox" @change="clickEvent" :disabled="disabled" />
    <span class="txt">
      <slot name="text"></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "form-checkbox",
  props: ["checked", "val", "baseList", "disabled"],
  model: {
    prop: "checked",
    event: "formChange",
  },
  computed: {
    checkType() {
      return typeof this.checked === "boolean";
    },
    classBind() {
      if (this.checkType) {
        return this.checked; // true false를 반환
      }
      return this.checked.some((item) => item === this.val); // 체크된 리스트에서 방금 클릭한 요소가 있으면 true
    },
  },
  methods: {
    clickEvent(event) {
      if (this.checkType) {
        this.$emit("formChange", event.target.checked);
      } else {
        if (!this.disabled) {
          const idx = this.checked.indexOf(this.val);
          let checkedArray = [...this.checked];
          if (idx !== -1) {
            checkedArray.splice(idx, 1);
          } else {
            checkedArray.push(this.val);
          }
          this.$emit("formChange", checkedArray);
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.form-checkbox {
  display: block;
  position: relative;
  cursor: pointer;
  input {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    opacity: 0;
    visibility: hidden;
  }
  .txt {
    display: block;
    position: relative;
    padding: 0 0 0 26px;
    font-size: 12px;
    line-height: 18px;
    color: #888;
    &::before {
      display: block;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 18px;
      height: 18px;
      background: url(../../assets/images/ic-checkbox-off-nomal-18.svg) center
        center no-repeat;
    }
  }
  &.checked {
    .txt {
      &::before {
        background-image: url(../../assets/images/ic-checkbox-on-nomal-18.svg);
      }
    }
  }
  &.box {
    .txt {
      border: 1px solid #ddd;
      border-radius: 10px;
      padding: 11px 15px;
      font-size: 14px;
      line-height: 20px;
      color: #000;
      text-align: center;
      white-space: nowrap;
      &::before {
        display: none;
      }
    }
    &.checked {
      .txt {
        border-color: #00d4ac;
        color: #00d4ac;
      }
    }
    &.disabled {
      cursor: default;
      .txt {
        background: #f7f7f7;
        color: #bbb;
      }
    }
  }
  &.all {
    .txt {
      border: none;
      padding: 0 0 0 34px;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #000;
      &::before {
        width: 24px;
        height: 24px;
        background-image: url(../../assets/images/ic-checkbox-off-24.svg);
      }
    }
    &.checked {
      .txt {
        &::before {
          background-image: url(../../assets/images/ic-checkbox-on-24.svg);
        }
      }
    }
  }
  &.list {
    .txt {
      border: none;
      padding: 0 0 0 34px;
      font-size: 14px;
      line-height: 20px;
      color: #000;
      &::before {
        width: 24px;
        height: 24px;
        background-image: url(../../assets/images/ic-check-off-24.svg);
      }
    }
    &.checked {
      .txt {
        &::before {
          background-image: url(../../assets/images/ic-check-on-24.svg);
        }
      }
    }
  }
}
</style>
