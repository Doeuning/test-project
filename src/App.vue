<template>
  <div id="app" :class="{ mobile: isMobile }">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  mounted() {
    window.addEventListener("load", this.handleResize);
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("load", this.handleResize);
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    ...mapActions(["getDeviceType"]),
    handleResize() {
      this.$store.dispatch("getDeviceType");
    },
  },
};
</script>

<style lang="scss" src="./assets/scss/common.scss" />
