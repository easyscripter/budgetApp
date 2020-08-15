<template>
  <div class="budget-list-wrap">
    <ElCard :header="header">
        <template v-if="!isEmpty">
            <BudgetListItem v-for="(item, prop) in filteredList" :key="prop" :type="item.type" :comment="item.comment" :value="item.value" :id="item.id"/>
        </template>
        <ElAlert v-else type="info" :title="alertTitle" :closable="false"></ElAlert>
    </ElCard>
  </div>
</template>

<script>
import BudgetListItem from './BudgetListItem';
import { vueBus } from "../main";

export default {
  name: "BudgetList",
  components: {
    BudgetListItem
  },
  props: {
    list: {
      type: Object,
      default: () => ({})
    },
  },
  created() {
    this.filteredList = this.list;
    vueBus.$on('filterItems', (filteredList) =>{
      this.filteredList = filteredList;
    });
  },
  data: () => ({
    header: 'BudgetList',
    alertTitle: 'Ваш список пуст',
    filteredList: {},
  }),
  computed: {
    isEmpty() {
      return !Object.keys(this.list).length
    }
  },
}
</script>
<style lang="css" scoped>

 .budget-list-wrap {
   max-width: 540px;
   margin: 0 auto;
 }

</style>