import Vue from 'vue';
import App from './components/App.vue';
import store from './store/store';
import router from './router';

require('dotenv').config();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
