<template>
  <div class="check-list-wrap">
    <div class="check-all" v-if="!isMobile">
      <slot name="checkall"></slot>
    </div>
    <div class="check-list">
      <slot name="checklist"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "form-checkbox-list",
};
</script>

<style scoped lang="scss">
.check-list-wrap {
  display: flex;
  .check-all {
    margin-right: 10px;
  }
  .check-list {
    display: flex;

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
  }
  .mobile & {
    display: block;
    .form-checkbox.box {
      flex: 1;
    }
  }
}
</style>
