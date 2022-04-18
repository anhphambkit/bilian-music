import axiosApi from '../plugins/axios';
import { APIs } from "@/configs/APIs";
const ALBUM_APIS = APIs.ALBUM;

export default () => ({
	/**
     * Get the top albums
     * @param {*} limit 
     * @param {*} offset 
     * @param {*} range 
     * @returns 
     */
    async top(limit = 10, offset = 0, range = "month") {
        try {
            const { data } = await axiosApi.get(ALBUM_APIS.TOP, {
                params: {
                    limit,
                    offset,
                    range
                }
            });
            return data
        }
        catch (error) {
            console.log("Error API", error)
        }
	},
});