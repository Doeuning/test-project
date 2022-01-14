<script>
import formCheckbox from "./form-checkbox";
export default {
  name: "form-checkbox-all",
  extends: formCheckbox,
  props: ["allCheck", "baseList", "checkedList"],
  model: {
    prop: "allCheck",
    event: "formChange",
  },
  data() {
    return {
      changedList: this.baseList,
      filteredList: "",
    };
  },
  computed: {
    checkType() {
      return this.allCheck;
    },
    classBind() {
      return this.allCheck;
    },
  },
  watch: {
    checkedList() {
      this.$emit(
        "formChange",
        this.checkedList.length === this.filteredList.length
      );
    },
    allDisabled() {
      if (this.allDisabled) {
        this.changedList = this.baseList.filter((el) => {
          el.disabled = true;
        });
        this.allCheck = false;
      } else {
        this.changedList = this.baseList.filter((el) => {
          el.disabled = false;
        });
      }
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
