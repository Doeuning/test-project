<template>
  <div id="app" :class="{ mobile: isMobile }">
    <router-view />
  </div>
</template>

<script>
import store from "./store";
import { mapMutations } from "vuex";

export default {
  name: "App",
  components: {},
  mounted() {
    window.addEventListener("load", this.handleResize);
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("load", this.handleResize);
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    ...mapMutations(["GET_DEVICE_TYPE"]),
    handleResize() {
      store.commit("GET_DEVICE_TYPE");
    },
  },
};
</script>

<style lang="scss" src="./assets/scss/common.scss" />
