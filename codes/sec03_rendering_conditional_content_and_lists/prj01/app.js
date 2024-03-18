const app = Vue.createApp({
  data() {
    return { goals: [], goal: "" };
  },
  methods: {
    addGoal() {
      this.goals.push(this.goal);
      this.goal = "";
      console.log(this.goals);
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1)
    }
  }
});

app.mount("#user-goals");
