import "./plugins/axios";
import "./plugins/global-mixins";
import "./plugins/bootstrap-vue";
import router from "./router";
import Vue from 'vue'
import App from './App.vue'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
