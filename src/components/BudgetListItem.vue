<template>
  <div class="list-item">
    <i :class="typeOfList"></i>
    <span class="budget-comment">{{comment}}</span>
    <span class="budget-value">{{value}}</span>
    <ElButton type="danger" size="mini" @click="deleteItem(id)">delete</ElButton>
  </div>
</template>

<script>
import {vueBus} from '../main';
export default {
  name: "BudgeListItem",
  props: {
      type: String,
      comment: String,
      value: Number,
      id: Number
  },
  methods: {
    deleteItem(id) {
      const isDelete = confirm('Are you sure you want to delete this item?');
      if (isDelete) vueBus.$emit('deleteItem', id);
    }
  },
  computed: {
    typeOfList: function () {
      return {
        "el-icon-top": this.type == "INCOME",
        "el-icon-bottom": this.type == "OUTCOME"
      }
    }
  }

};
</script>

<style>

.list-item {
   display: flex;
   align-items: center;
   padding: 10px 15px;
 }

 .budget-value {
   font-weight: bold;
   margin-left: auto;
   margin-right: 20px;
 }

 .el-icon-top {
   color: green;
 }

 .el-icon-bottom {
   color: red;
 }
</style>