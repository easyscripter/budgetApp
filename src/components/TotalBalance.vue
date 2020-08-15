<template>
  <div class="total-value" :class="dynamicBalance">
      Balance: {{ total }}
  </div>
</template>

<script>
export default {
  name: 'TotalBalance',
  props: {
    total: {
      type: Number,
      default: 0
    }
  },
  computed: {
    dynamicBalance: function() {
      return {
        'positive-balance': this.total > 0,
        'zero-balance': this.total == 0,
        'negative-balance': this.total < 0
      };
    }
  }
}
</script>

<style scoped>
  .total-value {
    font-size: 25px;
    text-transform: uppercase;
    padding: 20px;
    text-align: center;
  }

  .positive-balance {
    color: green;
  }

  .zero-balance {
    color: black;
  }

  .negative-balance {
    color: red;
  }
</style>