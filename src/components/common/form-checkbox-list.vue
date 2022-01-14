<template>
  <div class="check-list">
    <slot name="checklist"></slot>
  </div>
</template>

<script>
export default {
  name: "form-checkbox-list",
};
</script>

<style scoped lang="scss">
.check-list {
  display: flex;
}
.form-checkbox.box {
  ::v-deep .txt {
    border-radius: 0;
    position: relative;
  }
  & + .form-checkbox.box {
    ::v-deep .txt {
      border-left: none;
    }
  }
  &:first-child {
    ::v-deep .txt {
      border-radius: 10px 0 0 10px;
      &::before {
        display: none !important;
      }
    }
  }
  &:last-child {
    ::v-deep .txt {
      border-radius: 0 10px 10px 0;
    }
  }
  &.checked {
    ::v-deep .txt {
      &::before {
        display: block;
        content: "";
        position: absolute;
        top: -1px;
        bottom: -1px;
        left: -1px;
        width: 1px;
        height: auto;
        background: #00d4ac;
      }
    }
  }
}
.mobile {
}
</style>
