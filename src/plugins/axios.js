import Vue from "vue";
import axios from "axios";

// Create a custom axios instance
const api = axios.create({
	baseURL: `${process.env.VUE_APP_API_ENDPOINT}/${process.env.VUE_APP_API_VERSION}`,
	params: {
        apikey: process.env.VUE_APP_API_KEY
    }
})
Vue.prototype.$http = api;
export default api;