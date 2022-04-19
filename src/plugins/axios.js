import Vue from "vue";
import axios from "axios";

// Create a custom axios instance
const api = axios.create({
	baseURL: `${process.env.VUE_APP_API_ENDPOINT}/${process.env.VUE_APP_API_VERSION}`,
	params: {
		apikey: process.env.VUE_APP_API_KEY,
	},
});
Vue.prototype.$http = api;

// Add a response interceptor
api.interceptors.response.use(
    function (response) {
        if (response.status !== 200) {
            handleApiError(response)
        }
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response;
	},
    function (error) {
        handleApiError(error)
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	}
);

function handleApiError(response) {
    console.log("Error interceptors API", response)
}

export default api;
