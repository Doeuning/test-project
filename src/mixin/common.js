import { mapState } from "vuex";

const commonMixin = {
  computed: {
    ...mapState(["isMobile"]),
  },
  methods: {},
};
export { commonMixin };
