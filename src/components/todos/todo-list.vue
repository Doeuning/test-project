<template>
  <ul>
    <li
      v-for="(item, index) in this.$store.state.todo.list"
      :key="index"
      :class="{ complete: item.complete }"
    >
      <label for="index" class="checkbox">
        <input
          id="index"
          type="checkbox"
          :class="{ input: true, complete: item.complete }"
          @change="toggleCheckbox(item, index)"
        />
        <span class="ico"></span>
      </label>
      <span class="txt">{{ item.item }}</span>
      <button type="button" class="btn-delete" @click="deleteTodo(item, index)">
        Delete
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "todo-list",
  methods: {
    deleteTodo(item, index) {
      this.$store.commit("todo/DELETE_TODO", { item, index });
    },
    toggleCheckbox(item, index) {
      this.$store.commit("todo/TOGGLE_TODO", { item, index });
    },
  },
};
</script>

<style scoped lang="scss">
ul {
  margin-top: 30px;
  li {
    & + li {
      margin-top: 15px;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    padding: 15px 20px;
    background: rgba(255, 255, 255, 0.5);
    transition: all 0.3s;
    &.complete {
      background: rgba(100, 149, 237, 0.5);
    }
  }
}
.checkbox {
  position: relative;
  .input {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    &.complete {
      & ~ .ico {
        background: rgba(255, 255, 255, 1);
        opacity: 1;
        &::before {
          color: cornflowerblue;
        }
      }
    }
  }
  .ico {
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 0;
    background: #888;
    font-size: 0;
    opacity: 0.5;
    &::before {
      display: block;
      content: "L";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: scale(-1, 1) translate(32%, -55%) rotate(-45deg);
      font-weight: 700;
      font-size: 20px;
      color: #fff;
    }
  }
}
.txt {
  flex: 1;
  padding: 0 20px;
  font-size: 18px;
  line-height: 1.5;
  text-align: left;
  .complete & {
    font-weight: 700;
    color: #fff;
  }
}
.btn-delete {
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 0;
  background: #888;
  font-size: 0;
  opacity: 0.5;
  &::before {
    display: block;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 3px;
    height: 18px;
    background: #fff;
  }
  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 3px;
    height: 18px;
    background: #fff;
  }
  .complete & {
    background: #999;
    opacity: 1;
  }
}
</style>
