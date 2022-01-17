<script>
import formCheckbox from "./form-checkbox";
export default {
  name: "form-checkbox-all",
  extends: formCheckbox,
  props: ["allCheck", "baseList"],
  model: {
    prop: "allCheck",
    event: "formChange",
  },
  updated() {},
  data() {
    return {
      checkedList: [],
      filteredList: [],
    };
  },
  mounted() {
    this.filteredList = this.baseList.filter((el) => {
      return el.disabled === false;
    });
  },
  computed: {
    classBind() {
      return this.allCheck;
    },
  },
  watch: {
    checked() {
      this.$emit(
        "formChange",
        this.checked.length === this.filteredList.length
      );
    },
    disabled() {
      this.filteredList = this.baseList.filter((el) => {
        return el.disabled === false;
      });
    },
  },
  methods: {
    clickEvent() {
      console.log("this.allCheck", this.allCheck);
      if (this.checked !== this.filteredList) {
        this.checkedList = this.filteredList;
      } else {
        this.checkedList = [];
      }
      console.log("this.checked", this.checkedList);
      this.$emit("update:checked", this.checkedList);
      this.$emit("formChange", this.checkedList);
    },
  },
};
</script>
