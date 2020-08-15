<template>
  <div class="filter-container">
    <ElCard class="filter-card">
      <ElSelect class="type-select" v-model="typeOfItem" placeholder="Choose type..">
        <ElOption label="All" value="ALL" />
        <ElOption label="Income" value="INCOME" />
        <ElOption label="Outcome" value="OUTCOME" />
      </ElSelect>
      <ElButton class="sort-btn" type="success" @click="filterList(list, 'type')">Filter</ElButton>
    </ElCard>
  </div>
</template>

<script>
import { vueBus } from "../main";

export default {
  name: "FilterBudget",
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    typeOfItem: "ALL",
  }),
  methods: {
      filterList(listObj, sortField) {
      let filteredList = {};

      Object.keys(listObj).forEach((item) => {
        if (listObj[item][sortField] == this.typeOfItem) {
          filteredList[item] = Object.assign({}, listObj[item]);
        } else if (this.typeOfItem == "ALL") {
          filteredList = listObj;
        }
      });
      vueBus.$emit("filterItems", filteredList);
    },
  },
};
</script>

<style>
.filter-container {
  max-width: 540px;
  margin: 20px auto;
}

.type-select {
  margin-bottom: 40px;
}
.sort-btn {
  width: 100%;
}
</style>