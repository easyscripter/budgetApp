<template>
  <div id="app">
    <Form @submitForm="onFormSubmit" />
    <TotalBalance :total="totalBalance" />
    <FilterBudget :list="list"/>
    <BudgetList :list="list" />
  </div>
</template>

<script>
import BudgetList from "./components/BudgetList";
import TotalBalance from "./components/TotalBalance";
import Form from "./components/Form";

import FilterBudget from "./components/FilterBudget";

import { vueBus } from "./main";

export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
    Form,
    FilterBudget
  },

  data: () => ({
    list: {
      1: {
        type: "INCOME",
        value: 100,
        comment: "Some Comment",
        id: 1,
      },
      2: {
        type: "OUTCOME",
        value: -50,
        comment: "OutCome Comment",
        id: 2,
      },
    },
  }),

  computed: {
    totalBalance() {
      return Object.values(this.list).reduce(
        (accumulator, item) => accumulator + item.value,
        0
      );
    },
  },
  created() {
    vueBus.$on("deleteItem", (id) => {
      this.$delete(this.list, id);
    });
  },
  methods: {
    onFormSubmit(data) {
      const newObject = {
        ...data,
        id: Math.round((Math.random()* 10)),
      };


      this.$set(this.list, newObject.id, newObject);
    },

  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
