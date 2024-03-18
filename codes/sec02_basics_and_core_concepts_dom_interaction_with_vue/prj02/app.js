const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    submitForm() {
      alert("Submitted");
    },
    resetInput() {
      this.name = "";
      this.lastName = "";
    },
  },
  computed: {
    fullname() {
      console.log("inside fullname");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    }
  },
});

app.mount("#events");
