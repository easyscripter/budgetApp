import Vue from 'vue'
import App from './App.vue'
import './plugins/elements/index';

Vue.config.productionTip = false

export const vueBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
