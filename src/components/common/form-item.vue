<template>
  <div class="form-item">
    <div class="key">
      <slot name="key"></slot>
    </div>
    <div class="value">
      <slot name="value"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "form-item",
};
</script>

<style scoped lang="scss">
.form-item {
  display: flex;
  align-content: flex-start;
  .key {
    flex: 0 0 236px;
    padding: 12px 0;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #444;
  }
  .value {
    flex: 1 1 auto;
    .row {
      display: flex;
      align-items: center;
      & > * {
        & + * {
          margin-left: 10px;
        }
      }
      & + .row {
        margin-top: 10px;
      }
    }
  }
  & + .form-item {
    margin-top: 30px;
  }
}

.mobile {
  .form-item {
    display: block;
    .value {
      margin: 10px 0 0;
      .row {
        display: block;
        & > * {
          & + * {
            margin: 10px 0 0;
          }
        }
      }
    }
  }
}
</style>
