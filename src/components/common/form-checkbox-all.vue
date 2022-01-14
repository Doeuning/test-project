<script>
import formCheckbox from "./form-checkbox";
export default {
  name: "form-checkbox-all",
  extends: formCheckbox,
  props: ["baseList", "checkedList"],
  model: {
    prop: "allCheck",
    event: "formChange",
  },
  computed: {
    classBind() {
      return this.allCheck;
    },
    filteredList() {
      return this.baseList.filter((el) => {
        return el.disabled === false;
      });
    },
  },
  watch: {
    checkedList() {
      this.$emit(
        "formChange",
        this.checkedList.length === this.filteredList.length
      );
    },
  },
  methods: {
    clickEvent() {
      this.filteredList = this.baseList.filter((el) => {
        return el.disabled === false;
      });
      this.$emit("update:checkedList", !this.allCheck ? this.filteredList : []);
      this.$emit("formChange", this.allCheck);
    },
  },
};
</script>
