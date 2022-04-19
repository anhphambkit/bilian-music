// import "./plugins/vue-toastr";
import "./plugins/global-mixins";
import "./plugins/bootstrap-vue";
import "./plugins/axios";
import router from "./router";
import store from "./store";
import Vue from 'vue'
import App from './App.vue'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
